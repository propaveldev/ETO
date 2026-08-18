import type { Industry } from "@/data/industries";

export const industries: Industry[] = [
  {
    slug: "mining",
    title: "Mining industry",
    shortTitle: "Mining industry",
    cardText: "Monitoring bins, conveyors, crushers and ore stockpiles across the whole chain — from the pit to the port.",
    cardImage: "/images/mining/case-loading.png",
    heroImage: "/images/mining/panorama.png",
    intro:
      "Mining operations run in heavy dust, vibration and constantly changing material volumes. RETTAR radar and laser scanners deliver accurate level, volume and flow data where ordinary sensors lose accuracy or fail outright.",
    cases: [
      {
        title: "Haul truck loading station control",
        description:
          "Precisely measuring the truck bed profile and the falling material profile lets the control system calculate the loaded volume in real time, improving loading efficiency and reducing material loss.",
        challenges:
          "Heavy dust and moisture, possible corrosive gases; material height and volume change continuously, requiring accurate real-time tracking of the dynamics.",
        solution: "Radar level meter + laser profiler + laser radar",
        image: "/images/mining/case-loading.png",
      },
      {
        title: "Ore bin level control",
        description:
          "Ore is conveyed into surface or underground bins for intermediate storage. Continuous level measurement and limit-level control keep bin operation safe and efficient.",
        challenges: "Uneven ore particle size, significant reflectivity variation, dust interference.",
        solution: "Radar level meter + microwave point level switch",
        image: "/images/mining/case-bunker.png",
      },
      {
        title: "Belt conveyor flow monitoring",
        description:
          "Real-time control of the material flow on the belt lets operators adjust belt speed or feeder mode in time to keep the process stable.",
        challenges:
          "Changing material properties make measurements unstable and the material layer uneven, complicating dynamic monitoring.",
        solution: "Laser profiler",
        image: "/images/mining/case-conveyor.png",
      },
      {
        title: "Crusher bin level measurement",
        description:
          "The crusher's receiving bin takes run-of-mine ore delivered by haul trucks. Level control here is important but difficult given the operating environment.",
        challenges: "High material throughput, heavy dust generation, high humidity.",
        solution: "Radar level meter + radar 3D scanner",
        image: "/images/mining/case-crusher.png",
      },
      {
        title: "3D ore stockpile monitoring",
        description:
          "A 3D stockpile model provides accurate volume and distribution data for inventory management and planning, and is also used in stacker/reclaimer anti-collision systems.",
        challenges: "Irregular stockpile shape due to uneven terrain and material surface.",
        solution: "Laser scanner + radar level meter + radar 2D scanner",
        image: "/images/mining/case-stockpile.png",
      },
      {
        title: "Tailings level/density control",
        description:
          "Continuous measurement of tailings slurry concentration and flow during transport to the tailings storage facility ensures process stability and safety.",
        challenges: "Complex slurry composition, poor flowability, significant temperature and pressure fluctuations.",
        solution: "Radar level meter + slurry density meter / electromagnetic or acoustic flowmeter",
        image: "/images/mining/case-tailings.png",
      },
    ],
  },
  {
    slug: "food",
    title: "Food industry",
    shortTitle: "Food industry",
    cardText: "Non-contact level control for grain, flour, sugar and other bulk materials in silos and bins.",
    cardImage: "/images/applications/silo.png",
    heroImage: "/images/applications/silo.png",
    intro:
      "At grain elevators, flour mills and sugar plants it's critical to know exactly how much material is in each silo — for procurement planning, intake and inventory. RETTAR radar technology isn't bothered by dust, condensation or product build-up, which matters a lot in food production.",
    cases: [
      {
        title: "Grain level control in elevator silos",
        description:
          "Continuous monitoring of the grain pile height in every elevator silo enables accurate inventory tracking and timely planning of shipments and intake.",
        challenges: "Conical pile shape, dust during loading, varying flow properties across crops (wheat, corn, sunflower).",
        solution: "CFR6900 bulk solids radar level meter",
        image: "/images/applications/silo.png",
      },
      {
        title: "3D inventory of flour and sugar storage",
        description:
          "3D silo scanning provides a full picture of the product surface and an accurate volume/mass calculation of the remaining stock — without stopping production for manual measurements.",
        challenges: "Fine product generates heavy dust; build-up on the walls distorts the pile shape.",
        solution: "3DPro2300 radar 3D scanner",
        image: "/images/applications/warehouse.png",
      },
      {
        title: "Raw material feed control for feed mixing lines",
        description:
          "Compound feed production requires real-time control of the incoming material profile and flow rate so dosing matches the recipe.",
        challenges: "A dynamic feed process that's hard to quantify; several parameters need monitoring simultaneously.",
        solution: "Radar 2D scanner",
        image: "/images/applications/tanks.png",
      },
      {
        title: "High/low level alarm in intake bins",
        description:
          "Fast, reliable high and low level alarms in intake bins prevent overflow and line downtime from material shortage.",
        challenges: "Dust and vibration in the unloading zone, risk of product build-up on the sensing element.",
        solution: "Microwave point level switch (non-contact, no clogging)",
        image: "/images/applications/silo.png",
      },
      {
        title: "Level control in tanks with liquid food media",
        description:
          "Syrups, vegetable oils and other liquid ingredients require accurate, hygienic level measurement in tanks and tank farms.",
        challenges: "Steam and condensation above the product surface, varying tank geometry, hygienic material requirements.",
        solution: "CFR6400 integrated radar level meter for liquids",
        image: "/images/applications/tank-farm.png",
      },
    ],
  },
  {
    slug: "chemical",
    title: "Chemical industry",
    shortTitle: "Chemical industry",
    cardText: "Level, density and flow measurement of aggressive media in reactors, tanks and pipelines.",
    cardImage: "/images/applications/tank-farm.png",
    heroImage: "/images/applications/tank-farm.png",
    intro:
      "Aggressive, viscous and abrasive media are everyday conditions for instruments in chemical plants. RETTAR's non-contact radar technology and wear-resistant designs keep measuring where contact sensors fail quickly.",
    cases: [
      {
        title: "Level control in tanks with aggressive liquids",
        description:
          "Continuous level measurement of acids, alkalis and solvents in storage tanks without the sensing element contacting the medium.",
        challenges: "Chemically aggressive medium, vapors and foam on the surface, varying tank geometry.",
        solution: "CFR6400 integrated radar level meter for liquids",
        image: "/images/applications/tank-farm.png",
      },
      {
        title: "Flow and density control of process solutions",
        description:
          "Accurate flow and density control of reagents and process solutions stabilizes the process and reduces chemical consumption.",
        challenges: "Flow subject to significant fluctuation, highly aggressive medium, possible suspended particles.",
        solution: "Density meter + acoustic flowmeter / electromagnetic flowmeter",
        image: "/images/applications/tanks.png",
      },
      {
        title: "Interface level in separators and settlers",
        description:
          "Accurately locating the interface between layers (water/organics, sludge/overflow) optimizes the separation process and reagent dosing.",
        challenges: "Unstable medium composition, need for wear and corrosion resistance, continuous high-precision measurement.",
        solution: "SLD1100 interface level meter + electromagnetic flowmeter",
        image: "/images/applications/tank-farm.png",
      },
      {
        title: "3D monitoring of bulk chemical raw material silos",
        description:
          "For granular and powdered raw materials (polymers, salts, mineral components), 3D scanning provides an accurate volume and mass of stock on hand.",
        challenges: "Dust during loading, multiple signal reflections from the material, dynamically changing pile shape.",
        solution: "3DPro2300 radar 3D scanner",
        image: "/images/applications/silo.png",
      },
      {
        title: "Pipelines and sumps for process slurries",
        description:
          "Transporting slurry through pipelines and accumulating it in sumps requires reliable level and flow control under wear and corrosion.",
        challenges: "High viscosity and abrasiveness of the medium, strong interference for contact instruments.",
        solution: "Density meter + radar level meter + electromagnetic/acoustic flowmeter",
        image: "/images/applications/warehouse.png",
      },
    ],
  },
  {
    slug: "oil-gas",
    title: "Oil & gas industry",
    shortTitle: "Oil & gas industry",
    cardText: "Product accounting, tank and separator control, and metering skids across production, storage and transport.",
    cardImage: "/images/applications/tank-farm.png",
    heroImage: "/images/applications/tank-farm.png",
    intro:
      "Oil and petroleum product production, storage and transport sites take measurements in hazardous areas, in contact with aggressive and volatile media. RETTAR's non-contact radar technology delivers accurate custody-transfer measurement without putting staff or equipment at risk.",
    cases: [
      {
        title: "Petroleum product level control in storage tanks",
        description:
          "Continuous level monitoring in vertical steel tanks provides accurate inventory accounting and prevents overflow during receipt and dispatch.",
        challenges: "Hydrocarbon vapors, surface foam, explosion-protection requirements.",
        solution: "CFR6400 integrated radar level meter for liquids",
        image: "/images/applications/tank-farm.png",
      },
      {
        title: "Oil/water interface control in separators",
        description:
          "Precisely locating the phase boundary in separation units enables efficient produced-water discharge management without losing crude oil.",
        challenges: "Variable emulsion density, probe fouling, aggressive medium.",
        solution: "SLD1100 interface level meter + electromagnetic flowmeter",
        image: "/images/applications/tanks.png",
      },
      {
        title: "Crude oil and petroleum product flow accounting at custody-transfer stations",
        description:
          "Accurate metering of petroleum product transfer between tanks and into pipelines is required for commercial settlement between supplier and buyer.",
        challenges: "High accuracy requirements, hazardous area, medium viscosity.",
        solution: "Electromagnetic flowmeter",
        image: "/images/applications/tank-farm.png",
      },
      {
        title: "High-level alarm in drainage tanks and sludge pits",
        description:
          "Emergency overflow alarms on drainage tanks and sludge pits help prevent spills and environmental damage.",
        challenges: "Aggressive vapors, sensor icing in winter, remote site locations.",
        solution: "Microwave point level switch",
        image: "/images/applications/tanks.png",
      },
    ],
  },
  {
    slug: "power",
    title: "Power generation",
    shortTitle: "Power generation",
    cardText: "Coal yard, ash handling and cooling water tank control at thermal power plants.",
    cardImage: "/images/mining/case-stockpile.png",
    heroImage: "/images/mining/case-stockpile.png",
    intro:
      "At thermal power plants, accurate fuel inventory and utility media control directly affect generation continuity. RETTAR radar technology handles the dust of coal yards and the humidity of cooling systems alike.",
    cases: [
      {
        title: "Coal stock control at power plant coal yards",
        description:
          "3D coal yard monitoring provides accurate fuel volume data for supply planning and helps prevent downtime from fuel shortages.",
        challenges: "Dust generation, coal self-heating, irregular pile shape.",
        solution: "3DPro2300 radar 3D scanner / 3DPro2500 laser scanner",
        image: "/images/mining/case-stockpile.png",
      },
      {
        title: "Level control in surge tanks and cooling water reservoirs",
        description:
          "Regular cooling water level measurement for turbine and boiler equipment ensures an adequate supply for production needs.",
        challenges: "Steam interference, high humidity, varying tank geometry.",
        solution: "CFR6400 integrated radar level meter for liquids",
        image: "/images/applications/tank-farm.png",
      },
      {
        title: "Coal feed monitoring on the boiler house conveyor",
        description:
          "Controlling coal flow on the belt ahead of the crushing station ensures even fuel feed and stable combustion in the boiler.",
        challenges: "Variable coal particle size, conveyor vibration.",
        solution: "Laser profiler",
        image: "/images/mining/case-conveyor.png",
      },
      {
        title: "Ash and slag level control in ash removal bins",
        description:
          "Continuous level monitoring of ash and slag waste in storage bins prevents overflow and emergency shutdowns of the ash removal system.",
        challenges: "Material abrasiveness, high temperature, build-up.",
        solution: "CFR6900 radar level meter + microwave point level switch",
        image: "/images/mining/case-bunker.png",
      },
    ],
  },
  {
    slug: "metallurgy",
    title: "Metallurgy",
    shortTitle: "Metallurgy",
    cardText: "Charge bin, crushing complex and concentrate stockpile control at metallurgical plants.",
    cardImage: "/images/mining/case-crusher.png",
    heroImage: "/images/mining/case-crusher.png",
    intro:
      "Metallurgical production demands instruments that withstand high temperatures, dust and vibration — from charging furnace feed bins to storing finished concentrate.",
    cases: [
      {
        title: "Raw material level control in blast furnace and electric furnace bins",
        description:
          "Controlling the charge, coke and flux feed into receiving bins before smelting ensures accurate component dosing and process stability.",
        challenges: "High temperature, dust, equipment vibration.",
        solution: "CFR6900 radar level meter + radar 3D scanner",
        image: "/images/mining/case-bunker.png",
      },
      {
        title: "Level measurement in the crushing and sorting complex",
        description:
          "Level control in crusher receiving bins during raw material preparation prevents both overflow and the crusher running dry.",
        challenges: "High material throughput, heavy dust generation.",
        solution: "Radar level meter + radar 3D scanner",
        image: "/images/mining/case-crusher.png",
      },
      {
        title: "3D inventory of concentrate and finished product stockpiles",
        description:
          "Accurate volume and mass accounting of metal concentrate at open and covered storage sites underpins production planning and reporting.",
        challenges: "Irregular stockpile shape, multiple signal reflections from the material.",
        solution: "3DPro2300 radar 3D scanner",
        image: "/images/mining/case-stockpile.png",
      },
      {
        title: "Flow and density control of slag slurry",
        description:
          "Controlling slurry parameters in slag hydro-removal systems helps maintain process stability and reduce pipeline wear.",
        challenges: "High abrasiveness, elevated temperature, medium viscosity.",
        solution: "Density meter + electromagnetic flowmeter",
        image: "/images/applications/tanks.png",
      },
    ],
  },
  {
    slug: "building-materials",
    title: "Building materials & cement",
    shortTitle: "Building materials & cement",
    cardText: "Cement silo, batching plant and aggregate stockpile control.",
    cardImage: "/images/applications/silo.png",
    heroImage: "/images/applications/silo.png",
    intro:
      "At cement plants and concrete batching facilities, dosing accuracy and silo inventory control are critical. RETTAR radar technology withstands the heavy dust and build-up typical of this industry.",
    cases: [
      {
        title: "Cement level control in silos",
        description:
          "Continuous cement and lime level control in silos enables accurate supply planning and finished product dispatch.",
        challenges: "Heavy dust, material build-up on the walls, condensation.",
        solution: "CFR6900 bulk solids radar level meter",
        image: "/images/applications/silo.png",
      },
      {
        title: "3D inventory of aggregate stockpiles (crushed stone, sand)",
        description:
          "Calculating the volume of non-metallic material stock at open storage sites provides accurate data for procurement and production planning.",
        challenges: "Uneven pile surface, shape changes during loading and unloading.",
        solution: "3DPro2300 radar 3D scanner",
        image: "/images/applications/warehouse.png",
      },
      {
        title: "Level control in batching plant dosing bins",
        description:
          "Accurate dosing of concrete mix components by level in weighing bins ensures consistent finished mix quality.",
        challenges: "Vibration from dosing equipment, fast loading/unloading dynamics.",
        solution: "2DPro2100 radar 2D scanner",
        image: "/images/applications/silo.png",
      },
      {
        title: "High-level alarm in clinker receiving bins",
        description: "Timely alarms prevent overflow and downtime on the clinker kiln line.",
        challenges: "High temperature, heavy dust, material abrasiveness.",
        solution: "Microwave point level switch",
        image: "/images/applications/warehouse.png",
      },
    ],
  },
  {
    slug: "coal",
    title: "Coal industry",
    shortTitle: "Coal industry",
    cardText: "Loading, stockpile and conveyor control at coal mines and processing plants.",
    cardImage: "/images/mining/case-loading.png",
    heroImage: "/images/mining/case-loading.png",
    intro:
      "The coal industry combines mining and logistics tasks: loading onto transport, long-term stockpiling, and beneficiation. RETTAR radar and laser technology provides accurate volume accounting and conveyor control in heavily dusty conditions.",
    cases: [
      {
        title: "Coal loading control into rail cars and trucks",
        description:
          "Calculating the loaded coal volume from the vehicle bed profile provides accurate dispatch accounting and reduces losses from over- or under-loading.",
        challenges: "Dust, vibration, variation in coal moisture and density.",
        solution: "Radar level meter + laser profiler",
        image: "/images/mining/case-loading.png",
      },
      {
        title: "3D coal stockpile monitoring at the yard",
        description:
          "Volume control and timely stockpile rotation reduce the risk of spontaneous combustion and provide accurate inventory data.",
        challenges: "Dust, changing stockpile shape, large yard area.",
        solution: "3DPro2300 radar 3D scanner / laser scanner",
        image: "/images/mining/case-stockpile.png",
      },
      {
        title: "Coal level control in preparation plant bins",
        description:
          "Controlling intermediate coal storage ahead of beneficiation ensures a steady feed to the processing line.",
        challenges: "Uneven particle size, build-up of wet coal.",
        solution: "Radar level meter + microwave point level switch",
        image: "/images/mining/case-bunker.png",
      },
      {
        title: "Belt conveyor monitoring at open-pit coal mines",
        description:
          "Controlling material flow and belt centering along long conveyor runs reduces the risk of emergency shutdowns.",
        challenges: "Long conveyor runs, temperature swings, belt wear.",
        solution: "Laser profiler + belt centering system",
        image: "/images/mining/case-conveyor.png",
      },
    ],
  },
  {
    slug: "pharma",
    title: "Pharmaceutical industry",
    shortTitle: "Pharmaceutical industry",
    cardText: "Hygienic level control of raw materials and solutions on packaging lines and in reactors.",
    cardImage: "/images/applications/tanks.png",
    heroImage: "/images/applications/tanks.png",
    intro:
      "Pharmaceutical production demands hygienic contact materials and precise dosing when working with expensive raw materials in small quantities. RETTAR's non-contact radar technology poses no contamination risk to the product.",
    cases: [
      {
        title: "Raw material level control in packaging line bins",
        description:
          "Monitoring the remaining powdered raw material (lactose, starch, active substances) in receiving bins keeps the packaging line running smoothly.",
        challenges: "Strict hygiene requirements, fine dust, small vessel volumes.",
        solution: "CFR6900 radar level meter, hygienic design",
        image: "/images/applications/silo.png",
      },
      {
        title: "Level control in reactors and solution preparation vessels",
        description:
          "Measuring the level of liquid pharmaceutical substances and solutions in reactors ensures recipe accuracy and process control.",
        challenges: "Contact material purity requirements, surface foam, medium viscosity.",
        solution: "CFR6400 integrated radar level meter for liquids",
        image: "/images/applications/tanks.png",
      },
      {
        title: "3D inventory of finished goods warehouses",
        description:
          "Accurate accounting of remaining bulk raw materials and intermediates in storage reduces the need for labor-intensive manual recounts.",
        challenges: "Small storage volumes, high accuracy requirements.",
        solution: "3DPro2300 radar 3D scanner",
        image: "/images/applications/warehouse.png",
      },
      {
        title: "High-level alarm in dosing bins",
        description: "Timely alarms prevent overflow during automatic component dosing in the production process.",
        challenges: "Sensitivity to contamination, tight mounting dimensions.",
        solution: "Microwave point level switch",
        image: "/images/applications/silo.png",
      },
    ],
  },
  {
    slug: "environmental",
    title: "Environmental & water utilities",
    shortTitle: "Environmental & water utilities",
    cardText: "Settling tank, wastewater reservoir and landfill control at treatment facilities.",
    cardImage: "/images/applications/tank-farm.png",
    heroImage: "/images/applications/tank-farm.png",
    intro:
      "At treatment plants and waste sites, accurate measurement is essential for regulatory compliance and efficient process control. RETTAR offers solutions resistant to the aggressive, abrasive media typical of wastewater and sludge.",
    cases: [
      {
        title: "Interface level control in treatment plant settling tanks",
        description:
          "Locating the boundary between sludge and clarified water enables process control and timely sludge removal.",
        challenges: "Unstable medium composition, instrument wear-resistance requirements.",
        solution: "SLD1100 interface level meter",
        image: "/images/applications/tank-farm.png",
      },
      {
        title: "Level control in wastewater accumulation tanks",
        description: "Monitoring reserve capacity and preventing overflow of receiving tanks keeps treatment facilities running smoothly.",
        challenges: "Aggressive medium, vapors, corrosivity.",
        solution: "CFR6400 integrated radar level meter for liquids",
        image: "/images/applications/tank-farm.png",
      },
      {
        title: "Flow and density control of sludge at drying beds",
        description: "Controlling dewatered sludge parameters during transport for disposal helps optimize hauling logistics.",
        challenges: "High viscosity, abrasiveness, variable sludge density.",
        solution: "Density meter + electromagnetic flowmeter",
        image: "/images/applications/tanks.png",
      },
      {
        title: "3D monitoring of landfills and waste storage sites",
        description: "Calculating waste volume helps control landfill fill levels and prepare environmental reporting.",
        challenges: "Large site area, uneven terrain, weather conditions.",
        solution: "Radar 3D scanner + laser scanner",
        image: "/images/applications/warehouse.png",
      },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
