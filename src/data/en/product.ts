export const product3DPro2300 = {
  name: "3DPro2300",
  category: "Radar 3D scanner",
  tagline: "Enabling digital control of industrial production processes",
  photo: "/images/product/device-photo.png",
  principleImage: "/images/product/principle.png",
  mountingImage: "/images/product/mounting-count.png",
  principle:
    "The 3DPro2300 radar 3D scanner is based on terahertz FMCW (frequency-modulated continuous wave) ranging technology. A built-in rotation and tilt mechanism moves the radar sensor across multiple axes, enabling high-resolution scanning of bins and material surfaces. At each set angle, the sensor emits a microwave signal, receives the signal reflected from the material surface, and moves to the next angle to complete a full scan cycle, collecting level data from multiple perspectives. By combining the radar's spatial position, the level readings at each angle and the installation coordinates, advanced algorithms — image processing, big data analysis, AI and machine learning, and point-cloud reconstruction — build a 3D coordinate system and generate a point cloud for volumetric visualization. The system then calculates key parameters such as volume, mass and level.",
  advantages: [
    {
      title: "360° sector, 16,200 scan points",
      text: "A built-in 360° horizontal rotation and ±90° tilt mechanism emits 16,200 measurement signals. The device builds a precise 3D model of the material surface inside the bin, calculating minimum, maximum and average levels as well as mass and volume — with an accuracy unattainable for radars limited to a few fixed viewing angles.",
    },
    {
      title: "Full coverage, no blind spots at any fill level",
      text: "Radars with fixed angles lose measurement points on the surface at low fill levels (signals hit the bin walls) and distort the shape at high fill levels. The 3DPro2300 emits signals across thousands of angles, providing full surface coverage regardless of bin fill level.",
    },
    {
      title: "Easy installation, low maintenance cost",
      text: "The mounting opening can be as small as 190 mm, minimizing interference with the bin structure. A built-in status indicator light and temperature sensor with automatic shutdown on overheating reduce the risk of damage and repair costs.",
    },
    {
      title: "Redundancy, auto-correction and compatibility",
      text: "Dual power supply and dual network connectivity keep the device running even if one system fails. A built-in inclinometer detects installation angle deviation and corrects it automatically via software. The software is compatible with both Linux and Windows.",
    },
    {
      title: "Patents and awards",
      text: "Protected by a design patent along with utility model and invention patents. Recognized with several international awards, including the French FDA Design Award and the American MUSE Award.",
    },
  ],
  applicationAreas: [
    { label: "Storage vessel", image: "/images/applications/tanks.png" },
    { label: "Tank farm", image: "/images/applications/tank-farm.png" },
    { label: "Bin", image: "/images/applications/silo.png" },
    { label: "Material warehouse", image: "/images/applications/warehouse.png" },
  ],
  specs: [
    { label: "Frequency", value: "120–140 GHz" },
    { label: "Material type", value: "Granules, powders and other bulk materials" },
    { label: "Measuring range", value: "20 / 40 / 80 / 120 m" },
    { label: "Beam angle", value: "1.5°" },
    { label: "Horizontal rotation range", value: "0–360° (adjustable)" },
    { label: "Elevation measurement angle", value: "−90° … 90° (adjustable)" },
    { label: "Supply voltage", value: "24 V DC" },
    { label: "Power", value: "8 W" },
    { label: "Device weight", value: "5 kg (5.6 kg assembled)" },
    { label: "Communication", value: "Fiber optic, 4G/5G, Ethernet" },
    { label: "Output signal", value: "4–20 mA, RS485, MODBUS TCP, OPC (on request), WebAPI" },
    { label: "Operating temperature", value: "−40 … +75 °C (higher with a cooling unit)" },
    { label: "Ambient temperature", value: "−40 … +75 °C (up to 1200 °C with an adapter, non-hazardous areas)" },
    { label: "Operating pressure", value: "0–1 bar (higher on request)" },
    { label: "Protection rating", value: "IP67" },
    { label: "Accuracy", value: "level: ±2 mm; 3D volume modeling: ±0.5% … ±2% of full span" },
    { label: "Mounting", value: "Flange ≥ DN200" },
    { label: "Certification", value: "Dust ignition protection" },
  ],
  mounting: {
    intro:
      "Small bins take a single scanner. Large bins can use several scanners, each covering its own sector; the visualization software stitches the readings from every scanner into a single unified 3D view.",
    variants: [
      "Flat steel roof — welded mounting nozzle",
      "Flat roof (steel/reinforced concrete) — anchor bolts direct to the device flange",
      "Flat roof — mounted on the nozzle's lower flange",
      "Sloped bin roof — welded angled nozzle",
      "Sloped roof — anchor bolts with a custom flange",
    ],
    note:
      "The recommended scan angle range is −45° to +45°; the distance from the maximum material level to the bottom of the scanner should exceed 1 m for stable readings. For non-standard bin designs, our engineers will work out a custom mounting plan with you.",
  },
  connectivity: [
    "24 V DC power with a direct network connection (cable up to 100 m)",
    "220 V AC power via a control cabinet with a 24 V converter",
    "Wireless 4G/5G data transmission where wired links aren't available",
    "Fiber-optic data transmission over long distances or between multiple bins",
    "Integration into the customer's network topology via RJ-45 interfaces",
  ],
};

export type ProductSpec = { label: string; value: string };
