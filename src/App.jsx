import { useEffect, useMemo, useRef, useState } from "react";
import { projects, themes } from "./data/projects";
import ProjectDetail from "./components/ProjectDetail";

import waterImage from "./assets/water.jpg";
import fireImage from "./assets/fire.jpg";
import wildlifeImage from "./assets/wildlife.jpg";
import grasslandsImage from "./assets/grasslands.jpg";
import ranchingImage from "./assets/ranching.jpg";
import researchImage from "./assets/research.jpg";
import landscapeConnectionImg from "./assets/landscape-connection.jpg";
import partnersLandscape1 from "./assets/fhsl-partners-landscape1.jpg";
import partnersLandscape2 from "./assets/fhsl-partners-landscape2.jpg";

const themeImages = {
  water: waterImage,
  fire: fireImage,
  wildlife: wildlifeImage,
  grasslands: grasslandsImage,
  ranching: ranchingImage,
  research: researchImage,
};

function App() {
const [activeTheme, setActiveTheme] = useState("all");
const [selectedProject, setSelectedProject] = useState(null);
const [detailProject, setDetailProject] = useState(null);
const [search, setSearch] = useState("");
const mapRef = useRef(null);
const [projectLayer, setProjectLayer] = useState(null);
const [selectedMapObjectId, setSelectedMapObjectId] = useState(null);
const [currentPage, setCurrentPage] = useState(1);
const projectsPerPage = 9;

const filteredProjects = useMemo(() => {
  return projects.filter((project) => {
    const matchesTheme =
      activeTheme === "all" ||
      project.theme === activeTheme;

    const searchText = `
      ${project.name || ""}
      ${project.place || ""}
      ${project.landscape || ""}
      ${project.tagline || ""}
      ${project.summary || ""}
      ${(project.outcomes || []).join(" ")}
      ${(project.partners || []).join(" ")}
    `.toLowerCase();

    const matchesSearch = searchText.includes(
      search.toLowerCase()
    );

    return matchesTheme && matchesSearch;
  });
}, [activeTheme, search, projects]);


const totalPages = Math.ceil(
  filteredProjects.length / projectsPerPage
);

const paginatedProjects = useMemo(() => {
  const startIndex = (currentPage - 1) * projectsPerPage;

  return filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );
}, [filteredProjects, currentPage]);

useEffect(() => {
  const mapElement = mapRef.current;
  if (!mapElement) return;

  let cancelled = false;
  let layer = null;

  async function connectMap() {
    try {
      await mapElement.viewOnReady();
      if (cancelled) return;

      // Find the project layer in your existing web map.
      layer = mapElement.map.allLayers.find(
        (item) =>
          item.type === "feature" &&
          item.title?.includes("Fort Huachuca Restoration Projects")
      );

      if (!layer) {
        console.error("Restoration project layer not found.");
        return;
      }

      await layer.load();
      if (cancelled) return;

      // React will handle the project stories.
      layer.popupEnabled = false;

      setProjectLayer(layer);
      console.log("Connected to restoration projects:", layer.title);
    } catch (error) {
      console.error("Unable to connect ArcGIS map:", error);
    }
  }


  connectMap();

  return () => {
    cancelled = true;
  };
}, []);



useEffect(() => {
  if (!projectLayer) return;

  // Show every restoration location.
  if (activeTheme === "all" && !search.trim()) {
    projectLayer.definitionExpression = "1=1";
    return;
  }

  const conditions = [];

  // Filter by the actual ArcGIS primary theme.
  if (activeTheme !== "all") {
    const safeTheme = activeTheme.replace(/'/g, "''");
    conditions.push(`Primary_Theme = '${safeTheme}'`);
  }

  // Preserve the existing project library search.
  if (search.trim()) {
    const ids = filteredProjects.map((project) => project.id);

    if (ids.length === 0) {
      projectLayer.definitionExpression = "1=0";
      return;
    }

    const quotedIds = ids
      .map((id) => `'${id.replace(/'/g, "''")}'`)
      .join(", ");

    conditions.push(`Project_ID IN (${quotedIds})`);
  }

  projectLayer.definitionExpression = conditions.join(" AND ");

}, [projectLayer, activeTheme, search, filteredProjects]);




useEffect(() => {
  const mapElement = mapRef.current;

  if (!mapElement || !projectLayer) return;

  async function handleMapClick(event) {
    try {
      console.log("Map clicked:", event.detail);

      const click = event.detail;

      const response = await mapElement.hitTest(
        {
          x: click.x,
          y: click.y
        },
        {
          include: [projectLayer]
        }
      );

      console.log("Hit test results:", response.results);

      const result = response.results.find(
        (item) =>
          item.type === "graphic" &&
          item.graphic?.layer === projectLayer
      );

      if (!result) {
        console.log("No project marker detected.");
        return;
      }


      // Identify the feature clicked on the map
      const graphic = result.graphic;

      console.log("Clicked graphic attributes:", graphic.attributes);

      // Get the ArcGIS Object ID
      const objectId = graphic.getObjectId();

      console.log("Object ID:", objectId);

      if (objectId == null) {
        console.warn("Clicked feature has no Object ID.");
        return;
      }

      // Request the complete attributes from ArcGIS Online
      const featureSet = await projectLayer.queryFeatures({
        objectIds: [objectId],
        outFields: ["*"],
        returnGeometry: false,
      });

      const feature = featureSet.features[0];

      if (!feature) {
        console.warn("Could not retrieve clicked feature.");
        return;
      }

      const attributes = feature.attributes;

      console.log("Full project attributes:", attributes);

      // Find the Project_ID field, ignoring capitalization
      const idField = Object.keys(attributes).find(
        (key) => key.toLowerCase() === "project_id"
      );

      if (!idField) {
        console.error(
          "Project_ID field not found. Available fields:",
          Object.keys(attributes)
        );
        return;
      }

      const projectId = String(attributes[idField]).trim();

      console.log("Project ID:", projectId);

      // Match ArcGIS feature to the React project library
      const matchingProject = projects.find(
        (project) => project.id === projectId
      );

      if (matchingProject) {
        setSelectedMapObjectId(objectId);
        setSelectedProject(matchingProject);
        setDetailProject(null);

        console.log(
          "SUCCESS! Project story loaded:",
          matchingProject.name
        );
      } else {
        console.warn(
          "No matching React project found for:",
          projectId
        );
      }


    } catch (error) {
      console.error("Map click error:", error);
    }
  }

  mapElement.addEventListener(
    "arcgisViewClick",
    handleMapClick
  );

  return () => {
    mapElement.removeEventListener(
      "arcgisViewClick",
      handleMapClick
    );
  };

}, [projectLayer]);



useEffect(() => {
  const mapElement = mapRef.current;

  if (!mapElement || !projectLayer || !selectedProject) {
    return;
  }

  let cancelled = false;
  let highlightHandle = null;

  async function focusOnProject() {
    try {
      const safeId = selectedProject.id.replace(/'/g, "''");

      // Find all mapped locations for this project.
      const result = await projectLayer.queryFeatures({
        where: `Project_ID = '${safeId}'`,
        returnGeometry: true,
        outFields: ["*"],
      });

      if (cancelled || !result.features.length) return;

      // Find the exact icon clicked, when available.
      const selectedFeature =
        result.features.find(
          (feature) =>
            feature.attributes[projectLayer.objectIdField] ===
            selectedMapObjectId
        ) || result.features[0];

      if (!selectedFeature.geometry) return;

      // Get the layer's map view.
      const layerView =
        await mapElement.whenLayerView(projectLayer);

      if (cancelled) return;

      // Create a custom golden selection highlight.
      const existingHighlight =
        mapElement.highlights.find(
          (item) => item.name === "project-selection"
        );

      if (!existingHighlight) {
        mapElement.highlights.add({
          name: "project-selection",
          color: "#F4D06F",
          haloOpacity: 1,
          fillOpacity: 0.25,
        });
      }

      // Highlight the selected project marker.
      const objectId =
        selectedFeature.attributes[projectLayer.objectIdField];

      highlightHandle = layerView.highlight(
        objectId,
        { name: "project-selection" }
      );

      // Zoom closer, but don't zoom out if already closer.
      const targetScale = Math.min(
        mapElement.scale,
        100000
      );

      await mapElement.goTo(
        {
          target: selectedFeature.geometry,
          scale: targetScale,
        },
        {
          duration: 600,
        }
      );

    } catch (error) {
      if (!cancelled && error.name !== "AbortError") {
        console.error(
          "Unable to focus on project:",
          error
        );
      }
    }
  }

  focusOnProject();

  return () => {
    cancelled = true;
    highlightHandle?.remove();
  };

}, [selectedProject, selectedMapObjectId, projectLayer]);

useEffect(() => {
  setCurrentPage(1);
}, [activeTheme, search]);


  const selectedTheme = themes.find(
    (theme) => theme.id === activeTheme
  );

  
function changePage(page) {
  // Keep the selected page within the valid range
  const nextPage = Math.max(
    1,
    Math.min(page, totalPages)
  );

  setCurrentPage(nextPage);

  // Scroll back to the top of the project library
  document
    .getElementById("project-library")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
}


  function chooseTheme(themeId) {
    setActiveTheme(themeId);
    setSelectedProject(null);
  }

  
function exploreTheme(themeId) {
  // Apply the selected theme across the website
  chooseTheme(themeId);

  // Always begin at the first page of that theme
  setCurrentPage(1);

  // Scroll directly to the project library
  setTimeout(() => {
    document
      .getElementById("project-library")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, 100);
}


function showProjectOnMap(project) {
  setSelectedMapObjectId(null);
  setSelectedProject(project);
  setDetailProject(null);

  setTimeout(() => {
    document
      .getElementById("fort-huachuca-map")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  }, 100);
}


function openProjectStory(project) {
  setDetailProject(project);

  setTimeout(() => {
    document
      .getElementById("project-detail-view")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, 50);
}

function closeProjectStory() {
  setDetailProject(null);

  setTimeout(() => {
    document
      .getElementById("project-library")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, 50);
}

  return (
    <div className="site-shell">

      {/* =====================================================
          HERO
      ===================================================== */}

      <header className="hero">
        <div className="hero-inner">
          <p className="eyebrow">
            Fort Huachuca Sentinel Landscape
          </p>

          <h1>
            Explore a landscape
            <span> shaped by connection.</span>
          </h1>

          <p className="hero-description">
            Discover the restoration projects, working lands,
            ecological systems, and partnerships that sustain
            southeastern Arizona's Sky Island landscape while
            supporting Fort Huachuca's mission.
          </p>

<div className="hero-actions">
  <a
    href="#landscape-explorer"
    className="primary-action"
  >
    Explore the landscape
  </a>
</div>
        </div>
      </header>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="big-picture">
        <div className="big-picture-grid">

          <div className="big-picture-image">
            <img
              src={landscapeConnectionImg}
              alt="Fort Huachuca soldiers moving through the grassland landscape"
            />
          </div>

          <div className="big-picture-content">
            <p className="eyebrow">THE BIG PICTURE</p>

            <h2>
              One landscape.
              <br />
              Many connected
              <br />
              systems.
            </h2>

            <p className="big-picture-lead">
              Grassland valleys sit between mountain “islands,” creating a landscape
              where water, wildlife, fire, ranching, research, and military readiness
              are deeply connected.
            </p>

            <p>
              The Restoration Partnership brings together landowners, communities,
              scientists, conservation organizations, agencies, and Fort Huachuca
              to care for these working and natural lands.
            </p>
          </div>

        </div>

        <div className="big-picture-links">
          <div>
            <strong>Sky Islands</strong>
            <span>Mountains + grassland valleys</span>
          </div>

          <div>
            <strong>Working Lands</strong>
            <span>Ranching + conservation</span>
          </div>

          <div>
            <strong>Military Mission</strong>
            <span>Open space + compatibility</span>
          </div>

          <div>
            <strong>Partnership</strong>
            <span>Landscape-scale stewardship</span>
          </div>
        </div>
      </section>


      {/* =====================================================
          THEME EXPLORER
      ===================================================== */}

      <section
        id="explore"
        className="explore-section"
      >
        <div className="section-heading">
          <p className="section-kicker">
            Explore the work
          </p>

          <h2>
            Six themes. One connected landscape.
          </h2>

          <p>
            Select a restoration theme to discover the
            projects and places that bring it to life.
          </p>
        </div>

        <div className="theme-grid">
  {themes.map((theme) => (
<button
   key={theme.id}
    type="button"
  className={`theme-card ${activeTheme === theme.id ? "active" : ""}`}
  data-theme={theme.id}
      onClick={() => exploreTheme(theme.id)}
    >
      <div className="theme-card-image">
        <img
          src={themeImages[theme.id]}
          alt=""
        />

        <div className="theme-card-image-overlay">
          <span className="theme-icon">
            {theme.icon}
          </span>
        </div>
      </div>

      <div className="theme-card-content">
        <span className="theme-name">
          {theme.name}
        </span>

        <span className="theme-tagline">
          {theme.tagline}
        </span>

        <span className="theme-description">
          {theme.description}
        </span>

        <span className="theme-link">
          Explore projects →
        </span>
      </div>
    </button>
  ))}
</div>
      </section>


      {/* =====================================================
          MAP PLACEHOLDER
      ===================================================== */}

      <section
  id="landscape-explorer"
  className="map-section"
>
        <div className="map-heading">
          <div>
            <p className="section-kicker">
              Explore geographically
            </p>

            <h2>The Landscape Explorer</h2>
          </div>

          <div className="map-filter">
            <button
              className={
                activeTheme === "all"
                  ? "active"
                  : ""
              }
              onClick={() => chooseTheme("all")}
            >
              All projects
            </button>

            {themes.map((theme) => (
              <button
                key={theme.id}
                className={
                  activeTheme === theme.id
                    ? "active"
                    : ""
                }
                onClick={() =>
                  chooseTheme(theme.id)
                }
              >
                {theme.name}
              </button>
            ))}
          </div>
        </div>

        <div className="map-layout">
          <div className="map-placeholder">
            <div className="map-placeholder-inner">
              <span>
                INTERACTIVE GIS LANDSCAPE
              </span>

              <h3>
                {selectedTheme
                  ? `${selectedTheme.name} across the landscape`
                  : "Fort Huachuca Sentinel Landscape"}
              </h3>

              <p>
                Explore restoration projects and landscape features across the Fort Huachuca Sentinel Landscape.
              </p>





<div className="live-gis-map">
  <arcgis-map
    ref={mapRef}
    id="fort-huachuca-map"
    item-id="5af9bdfd272f424d9bbfcb336be8a02f"
    portal-url="https://www.arcgis.com"
    center="-110.44,31.85"
    scale="900000"
    popup-disabled
  >

    {/* Layer list */}
    <arcgis-expand slot="top-left">
      <div className="gis-layer-panel">
        <arcgis-layer-list />
      </div>
    </arcgis-expand>

    {/* Zoom controls */}
    <arcgis-zoom slot="top-right" />

    {/* Legend - solid white container */}
    <div slot="bottom-left" className="gis-legend-panel">
      <arcgis-legend
        reference-element="fort-huachuca-map"
      />
    </div>

  </arcgis-map>
</div>



            </div>
          </div>

          <aside className="map-story-panel">
            <p className="section-kicker">
              Landscape story
            </p>

            {selectedProject ? (
              <>
                <span className="project-theme-label">
                  {
                    themes.find(
                      (theme) =>
                        theme.id ===
                        selectedProject.theme
                    )?.name
                  }
                </span>

                <h3>
                  {selectedProject.name}
                </h3>

                <p className="project-place">
                  {selectedProject.place}
                </p>

                <p className="project-summary">
                  {selectedProject.summary}
                </p>

              <button
                type="button"
                className="project-story-link"
                onClick={() => openProjectStory(selectedProject)}
              >
                Read Project Story →
              </button>

                <button
                  className="close-project"
                  onClick={() => {
                    setSelectedMapObjectId(null);
                    setSelectedProject(null);
                  }}
                >
                  Back to overview
                </button>
              </>
            ) : (
              <>
                <h3>
                  {selectedTheme
                    ? selectedTheme.tagline
                    : "Choose a project"}
                </h3>

                <p>
                  {selectedTheme
                    ? selectedTheme.description
                    : "Eventually, clicking a project on the GIS map will open its restoration story here."}
                </p>

                <div className="story-stat">
                  <strong>
                    {filteredProjects.length}
                  </strong>

                  <span>
                    {activeTheme === "all"
                      ? "projects currently in the library"
                      : "projects connected to this theme"}
                  </span>
                </div>
              </>
            )}
          </aside>
        </div>
      </section>

            {/* =====================================================
          PROJECT DETAIL
      ===================================================== */}

      {detailProject && (
        <div id="project-detail-view">
          <ProjectDetail
            project={detailProject}
            themes={themes}
            onClose={closeProjectStory}
            onShowOnMap={showProjectOnMap}
          />
        </div>
      )}


      {/* =====================================================
          PROJECT LIBRARY
      ===================================================== */}

      <section
  id="project-library"
  className="library-section"
>
        <div className="library-heading">
          <div>
            <p className="section-kicker">
              Restoration partnership legacy
            </p>

            <h2>Explore the Projects</h2>

            <p>
              Browse the restoration projects
              documented across the Fort Huachuca
              Sentinel Landscape.
            </p>
          </div>

          <div className="search-box">
            <label htmlFor="project-search">
              Search projects
            </label>

            <input
              id="project-search"
              type="search"
              placeholder="Try San Pedro, fire, ranch..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />
          </div>
        </div>

        <div className="library-toolbar">
          <button
            className={
              activeTheme === "all"
                ? "active"
                : ""
            }
            onClick={() => chooseTheme("all")}
          >
            All
          </button>

          {themes.map((theme) => (
            <button
              key={theme.id}
              className={
                activeTheme === theme.id
                  ? "active"
                  : ""
              }
              onClick={() =>
                chooseTheme(theme.id)
              }
            >
              {theme.name}
            </button>
          ))}
        </div>

        <div className="results-count">
          Showing{" "}
          <strong>
            {filteredProjects.length}
          </strong>{" "}
          projects
        </div>

        <div className="project-grid">
  {paginatedProjects.map((project) => {
    const theme = themes.find(
      (themeItem) => themeItem.id === project.theme
    );

    return (
      <article
        className="project-card"
        key={project.id}
      >
        <div className="project-card-top">
          <span>{theme?.name}</span>
        </div>

        <h3>{project.name}</h3>

        <p className="project-card-place">
          {project.place}
        </p>

        <p className="project-card-description">
          {project.summary}
        </p>

        <div className="project-card-actions">
          <button
            className="project-story-link"
            onClick={() => openProjectStory(project)}
          >
            Read project story →
          </button>

          <button
            className="project-map-link"
            onClick={() => showProjectOnMap(project)}
          >
            Show on map ↗
          </button>
        </div>
      </article>
    );
  })}
</div>


{totalPages > 1 && (
  <nav className="pagination" aria-label="Project pages">

    <button
      type="button"
      disabled={currentPage === 1}
      onClick={() => changePage(currentPage - 1)}
    >
      ← Previous
    </button>

    {Array.from({ length: totalPages }, (_, index) => {
      const page = index + 1;

      return (
        <button
          type="button"
          key={page}
          className={currentPage === page ? "active" : ""}
          aria-current={currentPage === page ? "page" : undefined}
          onClick={() => changePage(page)}
        >
          {page}
        </button>
      );
    })}

    <button
      type="button"
      disabled={currentPage === totalPages}
      onClick={() => changePage(currentPage + 1)}
    >
      Next →
    </button>

  </nav>
)}

      </section>


     {/* =====================================================
    WHY THIS LANDSCAPE MATTERS
===================================================== */}

<section className="landscape-matters">

  <div className="landscape-matters-inner">

    <div className="landscape-matters-heading">
      <p className="section-kicker">
        Why this landscape matters
      </p>

      <h2>
        Conservation here is about more than
        protecting individual places.
      </h2>

      <p>
        The Fort Huachuca Sentinel Landscape functions as a connected
        system. Natural resources, working lands, military readiness,
        and long-term partnerships all depend on one another across
        southeastern Arizona.
      </p>
    </div>

    <div className="landscape-matters-photos">

      <figure>
        <img
          src={partnersLandscape2}
          alt="Partners gathered in the Fort Huachuca Sentinel Landscape"
        />
      </figure>

      <figure>
        <img
          src={partnersLandscape1}
          alt="Partners conducting restoration work in the Fort Huachuca Sentinel Landscape"
        />
      </figure>

    </div>

    <div className="landscape-matters-grid">

      <article>
        <span className="landscape-matters-number">01</span>
        <p className="landscape-matters-label">Natural systems</p>
        <h3>Connected ecosystems sustain the landscape.</h3>
        <p>
          Grasslands, forests, rivers, springs, wetlands, wildlife corridors,
          and mountain ranges function as an interconnected ecological system.
        </p>
      </article>

      <article>
        <span className="landscape-matters-number">02</span>
        <p className="landscape-matters-label">Working lands</p>
        <h3>Open lands support livelihoods and conservation.</h3>
        <p>
          Ranches and rural communities maintain open space while supporting
          wildlife habitat, watershed function, and the cultural identity of
          southeastern Arizona.
        </p>
      </article>

      <article>
        <span className="landscape-matters-number">03</span>
        <p className="landscape-matters-label">Fort Huachuca</p>
        <h3>Conservation supports military readiness.</h3>
        <p>
          Compatible land uses and open landscapes help preserve the conditions
          needed for military testing, aviation, and training.
        </p>
      </article>

      <article>
        <span className="landscape-matters-number">04</span>
        <p className="landscape-matters-label">Partnership</p>
        <h3>No single organization manages this landscape alone.</h3>
        <p>
          Landowners, communities, agencies, conservation organizations,
          researchers, and Fort Huachuca connect individual projects into
          a broader landscape-scale approach.
        </p>
      </article>

    </div>

  </div>

</section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="site-footer">
        <p>
          Fort Huachuca Sentinel Landscape Explorer
        </p>

        <span>
          Restoration • Partnership • Resilience
        </span>
      </footer>

    </div>
  );
}

export default App;