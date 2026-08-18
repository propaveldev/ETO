import {
  Mountain,
  Wheat,
  FlaskConical,
  Fuel,
  Zap,
  Flame,
  Building2,
  Layers,
  Pill,
  Leaf,
  Radar,
  Gauge,
  Bell,
  Settings2,
  ScanEye,
  ShieldCheck,
  Wrench,
  Award,
  Ruler,
  Box,
  Move,
  Droplet,
  type LucideIcon,
} from "lucide-react";

// Keyed by industry slug — locale-independent, so RU/EN data files stay untouched.
export const industryIcons: Record<string, LucideIcon> = {
  mining: Mountain,
  food: Wheat,
  chemical: FlaskConical,
  "oil-gas": Fuel,
  power: Zap,
  metallurgy: Flame,
  "building-materials": Building2,
  coal: Layers,
  pharma: Pill,
  environmental: Leaf,
};

// Keyed by catalog category id.
export const catalogCategoryIcons: Record<string, LucideIcon> = {
  "level-3d": Radar,
  "density-flow": Gauge,
  switches: Bell,
  systems: Settings2,
};

// Positional — the advantages array has the same 5 items, same order, in both locales.
export const productAdvantageIcons: LucideIcon[] = [Radar, ScanEye, Wrench, ShieldCheck, Award];

// Positional — selection guide has the same 5 questions, same order, in both locales.
export const selectionGuideIcons: LucideIcon[] = [Ruler, Box, Move, Droplet, Bell];
