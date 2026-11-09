function ProjectDetail({
  project,
  themes,
  onClose,
  onShowOnMap,
}) {
  if (!project) return null;

  const theme = themes.find((item) => item.id === project.theme);

  return (
    <section className="project-detail">
      <div className="project-detail-inner">

        <button
          className="project-detail-back"
          onClick={onClose}
        >
          ← Back to projects
        </button>

        <header className="project-detail-header">
          <p className="section-kicker">
            {theme?.icon} {theme?.name}
          </p>

          <h2>{project.name}</h2>

          {project.place && (
            <p className="project-detail-place">
              {project.place}
            </p>
          )}
        </header>

        <div className="project-detail-layout">

          {/* MAIN STORY */}
          <main className="project-detail-main">

            <section className="detail-section project-overview-section">
              <p className="section-kicker">
                Project overview
              </p>

              <p className="project-detail-summary">
                {project.summary}
              </p>
            </section>

            {project.sourceStory && (
              <section className="detail-section source-story-section">
                <p className="section-kicker">
                  2017 restoration story
                </p>

                <p className="source-story-intro">
                  From the original{" "}
                  <a
                    href="/fort_huachuca_restoration_projects.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fort Huachuca Sentinel Landscape Restoration Partnership guide ↗
                  </a>
                </p>

                <div className="project-source-story">
                  <p>{project.sourceStory}</p>
                </div>
              </section>
            )}

          </main>

          {/* SIDEBAR */}
          <aside className="project-detail-sidebar">

            {project.secondaryThemes?.length > 0 && (
              <section className="detail-sidebar-card">
                <p className="section-kicker">
                  Connected themes
                </p>

                <div className="related-theme-list">
                  {project.secondaryThemes.map((themeId) => {
                    const secondaryTheme = themes.find(
                      (item) => item.id === themeId
                    );

                    if (!secondaryTheme) return null;

                    return (
                      <span key={themeId}>
                        {secondaryTheme.icon} {secondaryTheme.name}
                      </span>
                    );
                  })}
                </div>
              </section>
            )}

            {project.mapFeatures?.length > 0 && (
              <section className="detail-sidebar-card map-connection-section">
                <p className="section-kicker">
                  On the map
                </p>

                <p className="map-connection-copy">
                  {project.mapFeatures.length === 1
                    ? "Mapped project location"
                    : "Mapped project locations"}
                </p>

                <div className="map-feature-list">
                  {project.mapFeatures.map((feature) => (
                    <button
                      key={feature}
                      type="button"
                      className="map-feature-button"
                      onClick={() => onShowOnMap(project)}
                    >
                      <span>{feature}</span>
                      <span className="map-feature-arrow">↗</span>
                    </button>
                  ))}
                </div>
              </section>
            )}

          </aside>

        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;