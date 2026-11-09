export const themes = [
  {
    id: "water",
    name: "Water",
    icon: "💧",
    tagline: "Keep water on the landscape",
    description:
      "Projects conserve water, restore streams and springs, recharge groundwater, reduce erosion, and strengthen riparian systems.",
  },
  {
    id: "fire",
    name: "Fire",
    icon: "🔥",
    tagline: "Restore a fire-adapted landscape",
    description:
      "Prescribed fire, fuels treatments, and community preparedness help restore ecological processes while reducing wildfire risk.",
  },
  {
    id: "wildlife",
    name: "Wildlife",
    icon: "🦌",
    tagline: "Keep the Sky Islands connected",
    description:
      "Habitat restoration, wildlife corridors, reintroductions, and species-focused projects support movement and biodiversity.",
  },
  {
    id: "grasslands",
    name: "Grasslands",
    icon: "🌾",
    tagline: "Protect the grassland seas",
    description:
      "Restoration addresses erosion, woody encroachment, invasive species, and other pressures affecting southeastern Arizona's grasslands.",
  },
  {
    id: "ranching",
    name: "Conservation Ranching",
    icon: "🐄",
    tagline: "Working lands and conservation",
    description:
      "Ranches combine livestock production with grassland stewardship, water conservation, wildlife habitat, and permanent land protection.",
  },
  {
    id: "research",
    name: "Research",
    icon: "🔬",
    tagline: "Learn from the landscape",
    description:
      "Long-term research sites help scientists understand rangelands, water, vegetation change, climate, and restoration outcomes.",
  },
];

export const projects = [
  // =========================================================
  // WILDLIFE
  // =========================================================

  {
    id: "agaves-bats",
    name: "Agaves and Bats",
    theme: "wildlife",
    secondaryThemes: ["grasslands"],
    place: "Coronado National Memorial",

    summary:
      "Restoring agaves and reducing invasive vegetation helps support endangered lesser long-nosed bats and regional pollination.",

    sourceStory:
      "Agaves are in decline at Coronado National Memorial due to past grazing practices and present dominance of invasive Lehmann lovegrass. The National Park Service and local middle schoolers are working to restore these food plants for endangered lesser long-nosed bats, important regional pollinators. Students visit the park on field trips to collect seed, raise agaves in their classrooms, then return to the park to remove invasive species and plant their agaves.",

    mapFeatures: ["Agaves and Bats"],
  },

  {
    id: "allen-flat",
    name: "Allen Flat Habitat Restoration",
    theme: "wildlife",
    secondaryThemes: ["grasslands"],
    place: "Allen Flat",

    summary:
      "Grassland habitat restoration uses shrub removal, reseeding, water improvements, and wildlife-friendly fencing to benefit antelope and mule deer.",

    sourceStory:
      "The Arizona Antelope Foundation and Arizona Game and Fish Department are working on state lands and with willing private landowners to restore historic grassland habitat for antelope. Techniques include both shrub removal and contour plowing followed by seeding. Partners are also placing waters and modifying fences to benefit antelope and mule deer.",

    mapFeatures: ["Allen Flat Habitat Restoration"],
  },

  {
    id: "antelope-fencing",
    name: "Antelope-friendly Fencing",
    theme: "wildlife",
    secondaryThemes: ["grasslands", "ranching"],
    place: "Sonoita Grasslands",

    summary:
      "Fence modifications, water improvements, vegetation management, and prescribed fire help maintain connected grassland for pronghorn.",

    sourceStory:
      "Pronghorn herds need connected expanses of intact grassland to thrive. The Arizona Antelope Foundation and partners are installing smooth bottom fence wires, removing mesquite, placing waters, and coordinating prescribed fires to support the Sentinel Landscape herd. Mesquite has been removed along Hwy 83; modified fence along Hwy 82 allows antelope to cross more easily.",

    mapFeatures: ["Antelope-friendly Fencing"],
  },

  {
    id: "brown-canyon",
    name: "Brown Canyon Wetlands",
    theme: "wildlife",
    secondaryThemes: ["water", "fire"],
    place: "Brown Canyon Ranch",

    summary:
      "Wetland restoration improves pond habitat for rare frogs, snakes, bats, and other wildlife while also supporting firefighting capacity.",

    sourceStory:
      "Coronado National Forest, Sky Island Alliance, and Borderlands Restoration repaired and planted around ponds at historic Brown Canyon Ranch that provide habitat for rare frogs and snakes, and drinking water for all kinds of bats. One pond has also been adapted for use as a fire-fighting dip site. A similar renovation is underway just south in Carr Canyon.",

    mapFeatures: ["Brown Canyon Wetlands"],
  },

  {
    id: "davidson-canyon",
    name: "Davidson Canyon Wildlife Corridor",
    theme: "wildlife",
    secondaryThemes: ["connectivity"],
    place: "Davidson Canyon",

    summary:
      "Wildlife monitoring and transportation planning support movement between the Santa Rita Mountains and the Rincon Mountains.",

    sourceStory:
      "Pima County and Arizona Department of Transportation (ADOT) lands provide passage for wildlife under Interstate 10. Sky Island Alliance (SIA) documents wildlife use of Davidson Canyon between the Santa Rita Mountains and the Rincons to the north. SIA’s findings are then used to make design recommendations to ADOT to improve safe passage of wildlife all over the state.",

    mapFeatures: ["Davidson Canyon Wildlife Corridor"],
  },

  {
    id: "frog-project",
    name: "FROG Project",
    theme: "wildlife",
    secondaryThemes: ["water"],
    place: "Cienega Creek Watershed",

    summary:
      "Native frog and fish populations have been restored through collaborative watershed conservation.",

    sourceStory:
      "The Frog and Fish Recovery Group restored native frog and fish populations in the Cienega Creek watershed. For this and other projects, the Cienega Watershed Partnership received the Department of Interior’s 2013 Partners in Conservation Award honoring exemplary collaborative conservation results.",

    mapFeatures: ["FROG Project"],
  },

  {
    id: "goulds-turkey",
    name: "Gould's Turkey",
    theme: "wildlife",
    secondaryThemes: ["species-recovery"],
    place: "Huachuca Mountains",

    summary:
      "Reintroduction efforts helped re-establish Gould's turkey in the Huachuca Mountains and later elsewhere in the Sentinel Landscape.",

    sourceStory:
      "Hunted out by the 1920s, Gould’s turkey from Mexico began a comeback in 1983 in the Huachuca Mountains thanks to reintroduction efforts of the Arizona Game and Fish Department, Mexican wildlife officials, National Wild Turkey Federation, Coronado National Forest, BLM, and private landowners. Since then Gould’s populations have also been established (translocated from the Huachucas) elsewhere on the Sentinel Landscape (Santa Ritas plus Rincons and Galiuros) and beyond.",

    mapFeatures: ["Gould's Turkey"],
  },

  {
    id: "greaterville-frogs",
    name: "Greaterville Frogs",
    theme: "wildlife",
    secondaryThemes: ["water", "species-recovery"],
    place: "Santa Rita Mountains",

    summary:
      "Habitat partnerships support threatened Chiricahua leopard frogs affected by drought, water diversions, invasive predators, and disease.",

    sourceStory:
      "Threatened Chiricahua leopard frogs are alive and well at this site in the Santa Ritas thanks to efforts of the Arizona Game and Fish Department and Coronado National Forest. Many partnerships across the Sentinel Landscape exist to restore habitat for this frog and other native aquatic species that have declined due to drought, water diversions, exotic predators, and disease.",

    mapFeatures: ["Greaterville Frogs"],
  },

  {
    id: "hot-springs",
    name: "Hot Springs Wildlife Corridor",
    theme: "wildlife",
    secondaryThemes: ["connectivity", "water"],
    place: "Galiuro Mountains / San Pedro River",

    summary:
      "Protected public and private lands form a wildlife corridor supporting bears, mountain lions, bighorn sheep, coatis, and other species.",

    sourceStory:
      "Cascabel Conservation Association and partners have established a wildlife corridor between the Galiuro Mountains and San Pedro River. A connected mixture of BLM land and private holdings with permanent conservation status provides passage for bears, mountain lions, bighorn sheep, and coatis. Voluntary grazing reductions and protection of perennial water increase the corridor’s habitat value.",

    mapFeatures: ["Hot Springs Wildlife Corridor"],
  },

  {
    id: "little-joe",
    name: "Little Joe Restoration",
    theme: "wildlife",
    secondaryThemes: ["water", "species-recovery"],
    place: "San Pedro River",

    summary:
      "Restoring spring flow created habitat for rare native fish and the endangered Huachuca water umbel.",

    sourceStory:
      "After BLM and partners dug out Little Joe Spring, it began flowing again and now hosts rare fish Gila topminnow and desert pupfish as well as the endangered plant Huachuca water umbel. Other springs isolated from the main channel of the San Pedro are habitat for rare aquatic plants and vertebrates.",

    mapFeatures: ["Little Joe Restoration"],
  },

  {
    id: "patagonia-corridor",
    name: "Patagonia Wildlife Corridor",
    theme: "wildlife",
    secondaryThemes: ["connectivity"],
    place: "Patagonia",

    summary:
      "Land protection maintains wildlife movement between the Santa Rita Mountains, Patagonia Mountains, and Canelo Hills.",

    sourceStory:
      "Borderlands Restoration of Patagonia and partners are protecting lands that link the Santa Rita Mountains with the Patagonias and Canelo Hills. Preserving travel routes for large mammals such as black bear and mountain lion is key to keeping population sizes healthy.",

    mapFeatures: ["Patagonia Wildlife Corridor"],
  },

  {
    id: "prairie-dog",
    name: "Prairie Dog Reintroduction",
    theme: "wildlife",
    secondaryThemes: ["grasslands", "species-recovery"],
    place: "Las Cienegas National Conservation Area",

    summary:
      "Re-establishing black-tailed prairie dogs restores an important grassland species and creates habitat used by other wildlife.",

    sourceStory:
      "The Arizona Game and Fish Department and partners are working at Las Cienegas National Conservation Area (LCNCA) to re-establish the black-tailed prairie dog to its historic range. This species engineers its environment in ways that attract other species. At LCNCA, new prairie dog colonies provide habitat for burrowing owls who have recently arrived on their own.",

    mapFeatures: ["Prairie Dog Reintroduction"],
  },

  {
    id: "riparian-pasture",
    name: "Riparian Pasture Restoration",
    theme: "wildlife",
    secondaryThemes: ["water"],
    place: "Parker Canyon",

    summary:
      "Removing invasive plants helps restore riparian and aquatic habitat downstream of Parker Canyon Lake.",

    sourceStory:
      "The Coronado National Forest is restoring riparian and aquatic habitat downstream of Parker Canyon Lake. This effort focuses on removal of invasive plants, primarily Johnson grass and tree of heaven. The native cottonwood-willow-lined stream is home to rare species including Northern Mexican gartersnake, Yellow-billed Cuckoo, and Gila topminnow.",

    mapFeatures: ["Riparian Pasture Restoration"],
  },

    // =========================================================
  // CONSERVATION RANCHING
  // =========================================================

  {
    id: "47-ranch",
    name: "47 Ranch",
    theme: "ranching",
    secondaryThemes: ["water", "wildlife", "grasslands"],
    place: "Mule Mountains",

    summary:
      "Conservation easements, water-retention structures, and long-term stewardship sustain livestock production, wildlife habitat, and native grasslands.",

    sourceStory:
      "On the 47 Ranch in the Mule Mountains, attention to ranching is inseparable from a long view towards sustaining livestock and wildlife. Conservation easements guarantee long-term status as ranch land, and 2500 retention structures improve water capture and infiltration. Native biodiversity highlights include five species of oaks, mule and white-tailed deer, three species of quail, and 50 different grasses.",

    mapFeatures: ["47 Ranch"],
  },

  {
    id: "babacomari-ranch",
    name: "Babacomari Ranch",
    theme: "ranching",
    secondaryThemes: ["water", "grasslands", "fire", "wildlife"],
    place: "Babacomari River",

    summary:
      "Grazing management, prescribed fire, conservation easements, erosion control, habitat work, and water monitoring sustain working grasslands.",

    sourceStory:
      "Within the boundaries of an extensive 1832 Mexican Land Grant, current management (since 1935) actively maintains grasslands using grazing rest, prescribed fire, and treatments for invasive brush. The ranch, key open space near Fort Huachuca, includes over 3000 acres of conservation easements. The Babacomari supports projects with partners to improve habitat for antelope and other wildlife, control erosion, and monitor water in the major San Pedro tributary that gives it its name.",

    mapFeatures: ["Babacomari Ranch"],
  },

  {
    id: "brookline-ranch",
    name: "Brookline Ranch",
    theme: "ranching",
    secondaryThemes: ["water", "grasslands"],
    place: "Babacomari River",

    summary:
      "Pasture rotation, shrub treatment, spring recovery, and river monitoring support both ranching and riparian conservation.",

    sourceStory:
      "Protecting and improving condition of the Babocomari River riparian corridor are priorities on the Brookline Ranch. The operation includes deliberate range rest and pasture rotation to sustain grazing lands. Treatments on over 4000 acres of shrub land have restored grasses and brought a long-dry spring back to life. The ranch has long been a partner in local wet-dry mapping of the San Pedro River and its major tributaries.",

    mapFeatures: ["Brookline Ranch"],
  },

  {
    id: "rose-tree",
    name: "Rose Tree Ranch",
    theme: "ranching",
    secondaryThemes: ["water", "wildlife", "grasslands"],
    place: "Sonoita Grasslands",

    summary:
      "Range monitoring, grazing management, wildlife-friendly water infrastructure, and riparian protection support native grasslands and wildlife.",

    sourceStory:
      "“Grass farming” is the foremost goal on the Rose Tree, where monitoring tracks range condition. Increasing the numbers of pastures and watering sites helps even out cattle grazing across the ranch and promotes growth of native grasses. Selective breeding for high-value qualities makes a smaller herd feasible. Permanent water, antelope-friendly fencing, and escape ramps in water tanks benefit the non-cattle ranch residents. Reducing grazing access to a riparian corridor maintains plant cover for antelope fawning.",

    mapFeatures: ["Rose Tree Ranch"],
  },

  {
    id: "san-jose",
    name: "San Jose Ranch",
    theme: "ranching",
    secondaryThemes: ["grasslands", "water", "wildlife"],
    place: "San Pedro River",

    summary:
      "Grassland restoration, shrub treatment, conservation easements, wildlife corridors, and recharge work support livestock and watershed function.",

    sourceStory:
      "Grassland restoration to reduce soil erosion and benefit livestock is top priority for this 1896 homestead, still run by the original family. Wildlife corridors wind between areas where mechanical and chemical treatments eliminate encroaching shrubs. The San Jose Ranch now includes the adjacent Flying H; over 4000 acres of both are protected as open, working land by conservation easements. The ranch is the site of a San Pedro River recharge project that also prevents downstream floods.",

    mapFeatures: ["San Jose Ranch"],
  },

  {
    id: "vera-earl",
    name: "Vera Earl Ranch",
    theme: "ranching",
    secondaryThemes: ["grasslands", "water", "wildlife"],
    place: "Sonoita Grasslands",

    summary:
      "Mesquite removal, water projects, wildlife habitat improvements, and conservation easements support both livestock production and native species.",

    sourceStory:
      "The Vera Earl operation combines livestock production with stewardship of the Sonoita grasslands and resident wildlife through a variety of partnerships. Antelope and grassland birds benefit from removal of encroaching mesquite on 2400 acres. Paired water projects support cattle and create habitat for threatened leopard frogs, and a conservation easement maintains key acreage as ranch land into the future.",

    mapFeatures: ["Vera Earl Ranch"],
  },

    // =========================================================
  // FIRE
  // =========================================================

  {
    id: "dragoon-fuels",
    name: "Dragoon Fuels Project",
    theme: "fire",
    secondaryThemes: ["grasslands", "wildlife"],
    place: "Dragoon Mountains",

    summary:
      "Thinning, trimming, and prescribed fire help restore overgrown chaparral and oak-pine woodlands while improving safety near developed areas.",

    sourceStory:
      "The Coronado National Forest and local partners are returning fire to the Dragoon Mountains to open up overgrown chaparral and oak-pine woodlands. Thinning and trimming pretreatments allow safer prescribed burning. In addition to benefiting vegetation and wildlife, the fuels project improves safety near developed areas.",

    mapFeatures: ["Dragoon Fuels Project"],
  },

  {
    id: "firewise",
    name: "Firewise Communities",
    theme: "fire",
    secondaryThemes: ["community", "mission"],
    place: "Multiple communities",

    summary:
      "Neighborhood partnerships reduce wildfire fuels, improve preparedness, and help protect communities and Fort Huachuca from unwanted fire.",

    sourceStory:
      "Babacomari-Research Ranch, Banning Creek, Cochise Stronghold, Patagonia, and Ramsey Canyon partnerships are groups of neighbors who have made their communities safer in the face of wildfires. They work with local fire departments and Arizona Department of Forestry and Fire Management to plan for wildfire and reduce fuels that prevent safely protecting structures. Certification comes with meeting National Fire Protection Association standards. Efforts in the Research Ranch-Babacomari and Ramsey Canyon communities help keep unwanted fires away from Fort Huachuca.",

    mapFeatures: [
      "Babacomari-Research Ranch Firewise",
      "Banning Creek Firewise",
      "Cochise Stronghold Firewise",
      "Patagonia Firewise",
      "Ramsey Canyon Firewise",
    ],
  },

  {
    id: "fort-huachuca-fire",
    name: "Fort Huachuca Prescribed Fire",
    theme: "fire",
    secondaryThemes: ["grasslands", "mission"],
    place: "Fort Huachuca",

    summary:
      "Regular prescribed burns reduce woody vegetation, support fire-tolerant ecosystems, protect development, and allow safer Army training.",

    sourceStory:
      "Fort Huachuca works with the Coronado National Forest to conduct prescribed fires that reduce woody vegetation and make ecosystems more fire-tolerant. Thousands of acres of grassland and oak savanna have been treated at regular intervals since the 1980s. The burn program also allows for safe execution of Army training activities and protects developments.",

    mapFeatures: ["Fort Huachuca Prescribed Fire"],
  },

  {
    id: "muleshoe-fire",
    name: "Muleshoe Ranch Prescribed Fire",
    theme: "fire",
    secondaryThemes: ["grasslands", "wildlife", "water"],
    place: "Muleshoe Ranch",

    summary:
      "Large prescribed burns renew grasslands, improve bighorn sheep habitat, and help maintain soil and stream conditions.",

    sourceStory:
      "Since the mid-1990s, BLM, The Nature Conservancy, Coronado National Forest, and private landowners have burned tens of thousands of acres on the Muleshoe. Burns renew grasslands and improve bighorn sheep habitat. Arizona Department of Water Resources has supported this work because healthy grasslands hold soil and keep streams clear and able to support native fish.",

    mapFeatures: ["Muleshoe Ranch Prescribed Fire"],
  },

  {
    id: "san-pedro-fire",
    name: "San Pedro Prescribed Fire",
    theme: "fire",
    secondaryThemes: ["grasslands", "water", "wildlife"],
    place: "San Pedro Riparian National Conservation Area",

    summary:
      "Prescribed fire restores native sacaton grasslands, reduces fuel loads, and helps protect the San Pedro riparian corridor from severe wildfire.",

    sourceStory:
      "To restore native sacaton grasslands, BLM has conducted prescribed burns on 4000 acres of the San Pedro Riparian Conservation Area. Regular fire reduces fuel loads and helps fireproof expanses of this giant bunchgrass. The fire program also works to prevent loss of the riparian corridor as a result of human-caused wildfires.",

    mapFeatures: ["San Pedro Prescribed Fire"],
  },

    // =========================================================
  // GRASSLANDS
  // =========================================================

  {
    id: "border-savanna",
    name: "Border Savanna Project",
    theme: "grasslands",
    secondaryThemes: ["fire"],
    place: "Coronado National Forest",

    summary:
      "Thinning helps restore oak savanna to a healthy, grassy condition while supporting safer fire management along the international border.",

    sourceStory:
      "The Coronado National Forest is opening up oak savanna and restoring it to a healthy, grassy condition. This thinning treatment produces commercially marketable firewood and also allows for safer management of fires along this stretch of the international border.",

    mapFeatures: ["Border Savanna Project"],
  },

  {
    id: "coalmine-spring",
    name: "Coalmine Spring",
    theme: "grasslands",
    secondaryThemes: ["water", "wildlife"],
    place: "Sonoita Creek Landscape",

    summary:
      "Protected grasslands, springs, and wildlife habitat strengthen an important linkage between mountain ranges and nearby conservation areas.",

    sourceStory:
      "The Arizona Game and Fish Commission has protected 4405 acres of grassland, including four separate springs that are home to the endangered Gila topminnow. The property is part of a wildlife habitat linkage connecting the Patagonia, Santa Rita, and Tumacacori Mountains and adds value to the string of high-biodiversity conservation areas along nearby Sonoita Creek.",

    mapFeatures: ["Coalmine Spring"],
  },

  {
    id: "las-cienegas",
    name: "Las Cienegas Grassland Restoration",
    theme: "grasslands",
    secondaryThemes: ["fire", "water", "ranching"],
    place: "Las Cienegas National Conservation Area",

    summary:
      "Shrub treatments, prescribed fire, and collaborative monitoring help maintain diverse grasslands at the headwaters of Cienega Creek.",

    sourceStory:
      "BLM conducts shrub treatments and prescribed fires to preserve the high diversity grasslands that form the Cienega Creek headwaters and provide beautiful open space for recreation. A long-standing group of partners, including local youth and the grazing allotment holder on the historic Empire Ranch, comes together to monitor range condition.",

    mapFeatures: ["Las Cienegas Grassland Restoration"],
  },

  {
    id: "native-plant-nursery",
    name: "Native Plant Nursery",
    theme: "grasslands",
    secondaryThemes: ["restoration"],
    place: "Patagonia and Safford",

    summary:
      "Native plant nurseries collect and grow grasses and other plant material while advancing restoration and horticultural practices.",

    sourceStory:
      "BLM, Gila Watershed Partnership, and Borderlands Restoration have set up native plant nurseries in Patagonia and Safford (NE of map area) to collect and grow grasses and other material for restoration. The initiative researches best horticultural and restoration practices and makes resulting data available to others doing similar work.",

    mapFeatures: ["Native Plant Nursery"],
  },

  {
    id: "st-david-upland",
    name: "St. David Upland Restoration",
    theme: "grasslands",
    secondaryThemes: ["water", "wildlife"],
    place: "St. David Cienega",

    summary:
      "Erosion-control structures and native seeding rebuild upland soils while helping protect downstream cienega habitat.",

    sourceStory:
      "BLM has installed small erosion control structures and seeded with native grasses above the wetlands of the St. David Cienega. Building up the soil allows grasses to germinate and grow in areas dominated by gullying and shrubs. Keeping soil on the uplands also protects cienega habitat for rare plants and birds. BLM has carried out similar work nearby above Contention.",

    mapFeatures: ["St. David Upland Restoration"],
  },

  {
    id: "sands-grassland",
    name: "Sands Grassland Restoration",
    theme: "grasslands",
    secondaryThemes: ["ranching", "water", "wildlife"],
    place: "Sands Ranch",

    summary:
      "Brush removal and improved livestock water distribution help restore grasslands for both cattle and wildlife.",

    sourceStory:
      "The Sands Ranch and Arizona Department of Environmental Quality have teamed up to remove brush and install new waterlines that better distribute cattle throughout pasture areas. This work helps restore 2000 acres of grasslands where both wildlife and cattle will benefit. Other partners include Arizona Game and Fish, Borderlands Restoration, and UA Cooperative Extension.",

    mapFeatures: ["Sands Grassland Restoration"],
  },

  {
    id: "san-rafael",
    name: "San Rafael State Natural Area",
    theme: "grasslands",
    secondaryThemes: ["water", "wildlife", "ranching"],
    place: "San Rafael Valley",

    summary:
      "Protected grasslands conserve the headwaters of the Santa Cruz River, rare aquatic species habitat, and a historic working landscape.",

    sourceStory:
      "Arizona State Parks oversees the 3500-acre border portion of this rich grassland valley that also forms the headwaters of the Santa Cruz River, home to rare aquatic species. Though not open to the public, spectacular views of this area are attainable on public roads and trails. An 1825 Mexican land grant, this historic valley has been cattle country since that time.",

    mapFeatures: ["San Rafael State Natural Area"],
  },

    // =========================================================
  // RESEARCH
  // =========================================================

  {
    id: "appleton-whittell",
    name: "Appleton-Whittell Research Ranch",
    theme: "research",
    secondaryThemes: ["grasslands", "fire", "wildlife"],
    place: "Appleton-Whittell Research Ranch",

    summary:
      "Long-term research and conservation maintain native grasslands while providing reference areas for understanding natural processes and management effects.",

    sourceStory:
      "On the Research Ranch, the National Audubon Society and partners maintain a native grassland ecosystem on private and public lands. Chief methods are controlling erosion, eliminating non-native species, and reintroducing fire. Efforts here also preserve research “reference” areas where natural processes prevail and sites can be compared with areas with more direct human management. Access is limited to protect research projects and sensitive wildlife habitat, but find opportunities for the public to visit the ranch on the Research Ranch website.",

    mapFeatures: ["Appleton-Whittell Research Ranch"],
  },

  {
    id: "santa-rita-range",
    name: "Santa Rita Experimental Range",
    theme: "research",
    secondaryThemes: ["grasslands", "water"],
    place: "Santa Rita Experimental Range",

    summary:
      "More than a century of research provides long-term information about rangeland management, vegetation change, precipitation, and eco-hydrology.",

    sourceStory:
      "The Santa Rita Experimental Range (SRER) was initially a USDA facility (1902), was transferred to the State of Arizona for management by the University of Arizona (1988), and was recently included as one of 20 core sites in the National Ecological Observatory Network. SRER is the oldest continuously studied rangeland in the world. Research covers range management, vegetation change, and eco-hydrology. Long-term databases include repeat photography starting 1902, precipitation since 1922, and vegetation transects beginning 1953.",

    mapFeatures: ["Santa Rita Experimental Range"],
  },

  {
    id: "walnut-gulch",
    name: "Walnut Gulch Experimental Watershed",
    theme: "research",
    secondaryThemes: ["water", "grasslands"],
    place: "Tombstone",

    summary:
      "Long-term watershed research examines rainfall, runoff, groundwater recharge, erosion, and water movement in an arid landscape.",

    sourceStory:
      "USDA-Agricultural Research Service established the Walnut Gulch Experimental Watershed (WGEW) near Tombstone in 1953 to learn how rainfall affects runoff, groundwater recharge, and movement of material in an arid environment. Research results have been used locally and all over the world to guide erosion control, flood forecasting, and water supply management. WGEW is operated by the USDA-ARS Southwest Watershed Research Center.",

    mapFeatures: ["Walnut Gulch Experimental Watershed"],
  },

    // =========================================================
  // WATER
  // =========================================================

  {
    id: "babacomari-erosion",
    name: "Babacomari Erosion Control",
    theme: "water",
    secondaryThemes: ["grasslands", "ranching"],
    place: "Babacomari Ranch",

    summary:
      "Water-retention and erosion-control structures help keep soil and moisture on the landscape while restoring degraded sacaton grasslands.",

    sourceStory:
      "Borderlands Restoration and partners install structures to keep soil and moisture on the land in critically eroding sacaton grass bottomlands on the Babacomari Ranch. The group has helped stabilize burned areas after wildfires and works closely with USGS scientists to place structures and monitor how well they work.",

    mapFeatures: ["Babacomari Erosion Control"],
  },

  {
    id: "backyard-erosion",
    name: "Backyard Erosion Control",
    theme: "water",
    secondaryThemes: ["community"],
    place: "Sierra Vista and Cochise County",

    summary:
      "Demonstration projects show residents how small-scale water-retention and erosion-control practices can be applied at homesites.",

    sourceStory:
      "A site at the University of Arizona in Sierra Vista shows the public how to create water retention and erosion control structures in backyards. The UA-Borderlands Restoration partnership is also demonstrating this practice at four homesites in Cochise County.",

    mapFeatures: ["Backyard Erosion Control"],
  },

  {
    id: "cochise-recharge",
    name: "Cochise Conservation & Recharge Network",
    theme: "water",
    secondaryThemes: ["community"],
    place: "Upper San Pedro Watershed",

    summary:
      "A regional network captures stormwater and recharges groundwater to support the aquifer and flows of the San Pedro River.",

    sourceStory:
      "Cochise County, Hereford NRCD, City of Bisbee, City of Sierra Vista, and The Nature Conservancy have come together as the Cochise Conservation and Recharge Network. The Palominas Recharge and Horseshoe Draw projects capture surface storm water, and the Sierra Vista Environmental Operations Park releases treated effluent to recharge groundwater that feeds the San Pedro River.",

    mapFeatures: [
      "Palominas Recharge",
      "Horseshoe Draw",
      "Sierra Vista Environmental Operations Park",
    ],
  },

  {
    id: "mcgrew-spring",
    name: "McGrew Spring Stewardship",
    theme: "water",
    secondaryThemes: ["wildlife", "research"],
    place: "Kartchner Caverns State Park",

    summary:
      "Citizen scientists monitor spring water, plants, and wildlife to provide information that can guide future restoration.",

    sourceStory:
      "Sky Island Alliance is working with Arizona State Parks to conduct seasonal monitoring at this spring at Kartchner Caverns State Park. Citizen scientists visit the spring five times per year to measure water quantity and quality and record observations on plants and animals. Resulting information guides future restoration projects and is deposited into an online database.",

    mapFeatures: ["McGrew Spring Stewardship"],
  },

  {
    id: "simpson-spring",
    name: "Simpson Spring Project",
    theme: "water",
    secondaryThemes: ["wildlife", "ranching"],
    place: "Whetstone Mountains",

    summary:
      "Spring restoration and dispersed water troughs protect the spring itself while supplying water for wildlife and livestock.",

    sourceStory:
      "The Coronado National Forest and Arizona Game and Fish Department are reworking this Whetstone Mountain spring. New fencing surrounds the opened up spring to keep out cattle, and five new, dispersed troughs receive spring waters that will supply both wildlife and livestock.",

    mapFeatures: ["Simpson Spring Project"],
  },

  {
    id: "teran-watershed",
    name: "Teran Watershed Enhancement",
    theme: "water",
    secondaryThemes: ["grasslands", "ranching", "research"],
    place: "Teran Watershed",

    summary:
      "Thousands of small water-retention structures reduce erosion, improve water quality, disperse livestock, and support healthier uplands.",

    sourceStory:
      "Multiple partners installed 5000 small water-retaining structures and other improvements on private and state lands. The Arizona Department of Water Resources helped the Redington NRCD, NRCS, and others hire locals to do work that prevents soil erosion, disperses cattle, and improves water quality. UA Cooperative Extension continues to monitor project effects on upland vegetation and waterways.",

    mapFeatures: ["Teran Watershed Enhancement"],
  },

  // =========================================================
  // WATER + WILDLIFE / RIPARIAN RESTORATION
  // =========================================================

  {
    id: "san-pedro-beaver",
    name: "San Pedro Beaver Reintroduction",
    theme: "water",
    secondaryThemes: ["wildlife", "riparian"],
    place: "San Pedro River",

    summary:
      "Reintroduced beavers help slow and spread river flows, support groundwater recharge, and maintain water for riparian vegetation and wildlife.",

    sourceStory:
      "Beavers were hunted out of the San Pedro by the late 19th century. Reintroduction began in 1999, and over time 15 individuals multiplied into a river-basin-wide population. Beaver dams help slow and spread flow, charging both the aquifer and river banks which keeps water available for vegetation and other wildlife along the river corridor.",

    mapFeatures: ["San Pedro Beaver Reintroduction"],
  },

  {
    id: "scotia-canyon",
    name: "Scotia Canyon Restoration",
    theme: "water",
    secondaryThemes: ["wildlife", "rare-species"],
    place: "Scotia Canyon",

    summary:
      "Stream restoration and invasive bullfrog removal support native aquatic species and habitat for the rare Huachuca water umbel.",

    sourceStory:
      "The Coronado National Forest and many partners, including Fort Huachuca, have for years been restoring the natural stream configuration and native species in Scotia Canyon. The project includes on-going removal of voracious non-native bullfrogs that hold down numbers of native amphibians. The rare plant Huachuca water umbel has thrived in this drainage since renovation began.",

    mapFeatures: ["Scotia Canyon Restoration"],
  },

  {
    id: "tamarisk-removal",
    name: "Tamarisk Removal",
    theme: "water",
    secondaryThemes: ["wildlife", "riparian", "fire"],
    place: "San Pedro River",

    summary:
      "Removing invasive tamarisk helps restore native cottonwood-willow habitat and improves conditions along an important riparian wildlife corridor.",

    sourceStory:
      "BLM has removed invasive tamarisk trees along 25 miles of the San Pedro River. Tamarisk thickets can push out the native cottonwood-willow forest and spread vigorously after fire. Removing this species that has little food value improves wildlife habitat along the riparian corridor used by almost 400 species of birds.",

    mapFeatures: ["Tamarisk Removal"],
  },

  ];

// =========================================================
// STORY PATHS
// =========================================================

export const storyPaths = [
  {
    id: "water-story",
    name: "Follow the Water",
    description:
      "Explore projects that keep water on the landscape, restore springs and streams, recharge groundwater, reduce erosion, and strengthen riparian systems.",
    projectIds: [
      "babacomari-erosion",
      "backyard-erosion",
      "cochise-recharge",
      "mcgrew-spring",
      "simpson-spring",
      "teran-watershed",
      "san-pedro-beaver",
      "scotia-canyon",
      "tamarisk-removal",
    ],
  },

  {
    id: "fire-story",
    name: "Living with Fire",
    description:
      "Explore how prescribed fire, fuels treatments, and community preparedness help restore fire-adapted landscapes and reduce wildfire risk.",
    projectIds: [
      "dragoon-fuels",
      "firewise",
      "fort-huachuca-fire",
      "muleshoe-fire",
      "san-pedro-fire",
      "border-savanna",
    ],
  },

  {
    id: "wildlife-story",
    name: "Connected for Wildlife",
    description:
      "Follow projects that restore habitat, reconnect wildlife movement routes, recover native species, and protect the extraordinary biodiversity of the Sky Islands.",
    projectIds: [
      "agaves-bats",
      "allen-flat",
      "antelope-fencing",
      "brown-canyon",
      "davidson-canyon",
      "frog-project",
      "goulds-turkey",
      "greaterville-frogs",
      "hot-springs",
      "little-joe",
      "patagonia-corridor",
      "prairie-dog",
      "riparian-pasture",
      "san-pedro-beaver",
      "scotia-canyon",
      "tamarisk-removal",
    ],
  },

  {
    id: "grasslands-story",
    name: "Grassland Country",
    description:
      "Explore restoration across the grasslands and savannas of southeastern Arizona, from shrub removal and erosion control to prescribed fire and native plant recovery.",
    projectIds: [
      "border-savanna",
      "coalmine-spring",
      "las-cienegas",
      "native-plant-nursery",
      "st-david-upland",
      "sands-grassland",
      "san-rafael",
      "allen-flat",
      "antelope-fencing",
    ],
  },

  {
    id: "working-lands-story",
    name: "Working Lands",
    description:
      "Explore ranches where livestock production, grassland stewardship, water conservation, wildlife habitat, and long-term land protection work together.",
    projectIds: [
      "47-ranch",
      "babacomari-ranch",
      "brookline-ranch",
      "rose-tree",
      "san-jose",
      "vera-earl",
    ],
  },

  {
    id: "research-story",
    name: "Learning from the Landscape",
    description:
      "Explore long-term research sites that help reveal how water, vegetation, climate, management, and restoration shape this landscape over time.",
    projectIds: [
      "appleton-whittell",
      "santa-rita-range",
      "walnut-gulch",
    ],
  },
];