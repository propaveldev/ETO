import type { CatalogCategory } from "@/data/catalog";

export const catalog: CatalogCategory[] = [
  {
    id: "level-3d",
    title: "Radar and laser level meters, 3D/2D scanners",
    items: [
      {
        slug: "3dpro2300",
        name: "3DPro2300 radar 3D scanner",
        purpose: "3D data on granular and powdered materials, volume and mass with no blind spots",
        keySpecs: [
          { label: "Range", value: "20 / 40 / 80 / 120 m" },
          { label: "Level accuracy", value: "±2 mm" },
          { label: "Volume accuracy", value: "±0.5–2% of span" },
          { label: "Frequency", value: "120–140 GHz" },
        ],
        detailHref: "/en/products/3dpro2300",
      },
      {
        slug: "cfr6900-hinged",
        name: "CFR6900 bulk solids radar level meter (hinged antenna)",
        purpose: "Continuous bulk material level measurement in demanding process conditions",
        keySpecs: [
          { label: "Range", value: "125 m" },
          { label: "Process temperature", value: "–40 … +200 °C" },
          { label: "Accuracy", value: "±2 mm" },
          { label: "Frequency", value: "120–140 GHz" },
        ],
      },
      {
        slug: "cfr6900-horn",
        name: "CFR6900 bulk solids radar level meter (plastic horn antenna)",
        purpose: "Continuous bulk material level measurement in demanding process conditions",
        keySpecs: [
          { label: "Range", value: "125 m" },
          { label: "Process temperature", value: "–40 … +130 °C" },
          { label: "Accuracy", value: "±2 mm" },
          { label: "Frequency", value: "120–140 GHz" },
        ],
      },
      {
        slug: "cfr6400",
        name: "CFR6400 integrated radar level meter for liquids",
        purpose: "Continuous level measurement of aggressive liquids",
        keySpecs: [
          { label: "Range", value: "50 m" },
          { label: "Operating pressure", value: "–1 … 20 bar" },
          { label: "Accuracy", value: "±2 mm" },
          { label: "Frequency", value: "120–140 GHz" },
        ],
      },
      {
        slug: "3dpro2500",
        name: "3DPro2500 laser scanner",
        purpose: "3D data on granular and powdered materials via laser measurement",
        keySpecs: [
          { label: "Range", value: "up to 80 m" },
          { label: "Measurement accuracy", value: "±1 mm" },
          { label: "Volume accuracy", value: "±1–2% of span" },
          { label: "Laser measurement angle", value: "0–90°" },
        ],
      },
      {
        slug: "3dpro2500mini",
        name: "3DPro2500mini laser scanner",
        purpose: "Compact laser 3D scanner for smaller vessels",
        keySpecs: [
          { label: "Range", value: "up to 50 m" },
          { label: "Measurement accuracy", value: "±3 mm" },
          { label: "Volume accuracy", value: "≤ ±5‰ of span" },
          { label: "Rotation angle", value: "0–360°" },
        ],
      },
      {
        slug: "2dpro2100",
        name: "2DPro2100 radar 2D scanner",
        purpose: "Material profile measurement on conveyors and in screening processes",
        keySpecs: [
          { label: "Range", value: "30 m" },
          { label: "Scan speed", value: "1 rev/s (adjustable)" },
          { label: "Curve display accuracy", value: "±1 mm" },
          { label: "Scan angle", value: "0–360° (adjustable)" },
        ],
      },
      {
        slug: "laser-profiler",
        name: "Laser profiler",
        purpose: "Profile control of granular and powdered materials on conveyors",
        keySpecs: [
          { label: "Range", value: "1.2–1.5 m" },
          { label: "Accuracy", value: "±1 cm" },
          { label: "Data acquisition rate", value: "3 fps" },
          { label: "Mounting", value: "overhead" },
        ],
      },
      {
        slug: "laser-radar",
        name: "Laser radar",
        purpose: "3D data acquisition for machine vision systems",
        keySpecs: [
          { label: "Range", value: "1–100 m" },
          { label: "Field of view", value: "90° × 45°" },
          { label: "Laser class", value: "Class 1 (eye-safe)" },
          { label: "Wavelength", value: "905 nm" },
        ],
      },
    ],
  },
  {
    id: "density-flow",
    title: "Density meters and flowmeters",
    items: [
      {
        slug: "sld1100",
        name: "SLD1100 interface level meter",
        purpose: "Interface level measurement in thickeners, sludge separators and settlers",
        keySpecs: [
          { label: "Range", value: "0–35 m" },
          { label: "Resolution", value: "±1 cm" },
          { label: "Protection rating", value: "probe IP68" },
          { label: "Build-up effect", value: "none" },
        ],
      },
      {
        slug: "nrd3000",
        name: "NRD3000 radioisotope density meter (Na22-based)",
        purpose: "Non-contact density measurement of slurry and process media from outside the pipe",
        keySpecs: [
          { label: "Detector range", value: "0 … 3000 kg/m³" },
          { label: "Accuracy", value: "≤ ±1% of span" },
          { label: "Protection rating", value: "IP67" },
          { label: "Mounting", value: "external clamp-on" },
        ],
      },
      {
        slug: "electromagnetic-flowmeter",
        name: "Electromagnetic flowmeter",
        purpose: "Flow measurement of electrically conductive liquids and slurries",
        keySpecs: [
          { label: "Max. flow velocity", value: "15 m/s" },
          { label: "Accuracy", value: "±0.5% of span" },
          { label: "Nominal diameter", value: "3–2000 mm" },
          { label: "Operating pressure", value: "up to 4.0 MPa" },
        ],
      },
    ],
  },
  {
    id: "switches",
    title: "Point level switches",
    items: [
      {
        slug: "microwave-switch",
        name: "Microwave point level switch",
        purpose: "High/low level alarm for granular, powdered and lumpy materials",
        keySpecs: [
          { label: "Range", value: "0–100 m" },
          { label: "Process temperature", value: "–40 … +80 °C (up to 500 °C with an adapter)" },
          { label: "Frequency", value: "24–26 GHz" },
          { label: "Beam angle", value: "20°" },
        ],
      },
      {
        slug: "doppler-switch",
        name: "Doppler flow switch",
        purpose: "Flow detection in pipelines and on belt conveyors",
        keySpecs: [
          { label: "Min. flow velocity", value: "0.1 m/s" },
          { label: "Process temperature", value: "–40 … +220 °C (up to 1000 °C with an adapter)" },
          { label: "Frequency", value: "24–26 GHz" },
          { label: "Power", value: "5 mW" },
        ],
      },
    ],
  },
  {
    id: "systems",
    title: "Auxiliary systems",
    items: [
      {
        slug: "belt-centering",
        name: "Belt centering system",
        purpose: "Automatic correction of conveyor belt drift from the center line",
        keySpecs: [
          { label: "Belt width", value: "500–2200 mm" },
          { label: "Allowable belt speed", value: "0.5–5.5 m/s" },
          { label: "Turning angle", value: "±30°" },
          { label: "Accuracy", value: "±15 mm" },
        ],
      },
    ],
  },
];

export const selectionGuide = [
  {
    question: "Do you just need the current level at a single point?",
    answer:
      "A standard radar level meter (CFR6900 for solids, CFR6400 for liquids) is faster to install and cheaper than a 3D scanner when pile shape doesn't matter.",
  },
  {
    question: "Do you need an accurate volume/mass of stock in an irregularly shaped bin or warehouse?",
    answer:
      "A radar or laser 3D scanner (3DPro2300, 3DPro2500) builds a 3D surface model and calculates volume to ±0.5–2% accuracy instead of estimating from a single point.",
  },
  {
    question: "Do you need a real-time material profile on a conveyor?",
    answer: "A laser profiler or radar 2D scanner (2DPro2100) — monitors distribution and prevents belt overload.",
  },
  {
    question: "Is the medium an aggressive liquid or highly abrasive slurry?",
    answer:
      "CFR6400 (non-contact radar) for liquids; for slurry, combine a density meter (including the non-contact radioisotope NRD3000) with a radar level meter.",
  },
  {
    question: "Do you just need overflow/empty alarms, not continuous measurement?",
    answer: "A microwave or Doppler point level switch is cheaper than a full level meter when only threshold alarming is needed.",
  },
];
