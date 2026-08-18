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
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
