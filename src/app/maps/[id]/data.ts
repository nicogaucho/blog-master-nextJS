import type { ChartConfig } from "@/components/ui/chart";

export type MarkerType = 
  | "us_strike"
  | "iran_retaliatory_strike"
  | "us_military_site"
  | "chokepoint"
  | "oil_tanker_traffic";

export interface MarkerStyle {
  color: string;
  border: string;
  text: string;
  shape: "circle" | "square";
  hoverScale: string;
  activeScale: string;
  ring?: string;  // opzionale, solo per alcuni tipi
}

export const markerStyles: Record<MarkerType, MarkerStyle> = {
  us_strike: {
    color: "bg-blue-500",
    border: "border-blue-300",
    text: "text-blue-200",
    shape: "circle",
    hoverScale: "hover:scale-150",
    activeScale: "active:scale-175",
    ring: "ring-2 ring-orange-300/50 ring-offset-1 ring-offset-transparent",
  },
  iran_retaliatory_strike: {
    color: "bg-sky-300",
    border: "border-sky-300",
    text: "text-sky-300",
    shape: "circle",
    hoverScale: "hover:scale-150",
    activeScale: "active:scale-175",
    ring: "ring-2 ring-sky-400/50 ring-offset-1 ring-offset-transparent",
  },
  us_military_site: {
    color: "bg-slate-400",
    border: "border-slate-200",
    text: "text-slate-100",
    shape: "square",
    hoverScale: "hover:scale-90",
    activeScale: "active:scale-125",
  },
  chokepoint: {
    color: "bg-teal-400",
    border: "border-teal-200",
    text: "text-teal-100",
    shape: "circle",
    hoverScale: "hover:scale-90",
    activeScale: "active:scale-125",
  },
  oil_tanker_traffic: {
    color: "bg-yellow-400",
    border: "border-yellow-200",
    text: "text-yellow-100",
    shape: "circle",
    hoverScale: "hover:scale-80",
    activeScale: "active:scale-125",
  },
};

export interface LocationPoint {
  city: string;
  lng: number;
  lat: number;
  size: number;
  type: MarkerType;
  activeStrike: boolean;
}

export interface BreakdownRow {
  label: string;
  value: number;
}

export const locations: LocationPoint[] = [
  // 🟠 US strikes across Iran
  { city: "Karaj", lng: 50.9391, lat: 35.8327, size: 13, type: "us_strike", activeStrike: false },
  { city: "Kermanshah", lng: 47.0650, lat: 34.3277, size: 13, type: "us_strike", activeStrike: true },
  { city: "Isfahan", lng: 51.6674, lat: 32.6539, size: 13, type: "us_strike", activeStrike: false },
  { city: "Khomein", lng: 50.0758, lat: 33.6739, size: 13, type: "us_strike", activeStrike: false },
  { city: "Defzul", lng: 48.3961, lat: 32.3442, size: 13, type: "us_strike", activeStrike: false },
  { city: "Sahand", lng: 46.4672, lat: 37.7453, size: 13, type: "us_strike", activeStrike: true },
  { city: "Minab", lng: 57.0819, lat: 27.1470, size: 13, type: "us_strike", activeStrike: true },
  { city: "Kharg Island", lng: 50.3252, lat: 29.2338, size: 13, type: "us_strike", activeStrike: true },

  // 🔴 Iran retaliatory strike
  { city: "Tehran", lng: 51.3890, lat: 35.6892, size: 16, type: "iran_retaliatory_strike", activeStrike: true },
  { city: "Qom", lng: 50.8764, lat: 34.6401, size: 16, type: "iran_retaliatory_strike", activeStrike: false },

  // ⬛ US military sites
  { city: "Al Udeid Air Base (Qatar)", lng: 51.3150, lat: 25.1170, size: 10, type: "us_military_site", activeStrike: false },
  { city: "Ali Al Salem Air Base (Kuwait)", lng: 47.5200, lat: 29.3470, size: 10, type: "us_military_site", activeStrike: false },
  { city: "Al Dhafra Air Base (UAE)", lng: 54.5476, lat: 24.2519, size: 10, type: "us_military_site", activeStrike: false },
  { city: "Prince Sultan Air Base (Arabia)", lng: 47.5804, lat: 24.0627, size: 10, type: "us_military_site", activeStrike: false },
  { city: "Diego Garcia", lng: 72.4343, lat: -7.3195, size: 10, type: "us_military_site", activeStrike: false },
  { city: "Camp Arifjan (Kuwait)", lng: 48.0060, lat: 29.1778, size: 10, type: "us_military_site", activeStrike: false },
  { city: "Incirlik (Turkey)", lng: 35.4259, lat: 37.0021, size: 10, type: "us_military_site", activeStrike: false },
  { city: "NAS Sigonella (Sicily)", lng: 14.9224, lat: 37.3966, size: 10, type: "us_military_site", activeStrike: false },

  // 🟢 Chokepoints
  { city: "Strait of Hormuz", lng: 56.4000, lat: 26.5667, size: 10, type: "chokepoint", activeStrike: false },
  { city: "Suez Canal", lng: 32.5498, lat: 30.4530, size: 10, type: "chokepoint", activeStrike: false },
  { city: "Bab al-Mandab Strait", lng: 43.4500, lat: 12.5850, size: 10, type: "chokepoint", activeStrike: false },
];

export const usersPerDay = [
  { day: "Mon", users: 320 },
  { day: "Tue", users: 410 },
  { day: "Wed", users: 560 },
  { day: "Thu", users: 640 },
  { day: "Fri", users: 780 },
  { day: "Sat", users: 690 },
  { day: "Sun", users: 720 },
];

export const usersPerDayChartConfig = {
  users: {
    label: "Users",
    color: "var(--color-blue-500)",
  },
} satisfies ChartConfig;

export const deviceCategoryData = [
  { name: "Us strikes", value: 60, fill: "var(--color-blue-500)" },
  { name: "Iran strikes", value: 30, fill: "var(--color-sky-400" }
];

export const deviceCategoryChartConfig = {
  desktop: { label: "Us Military sites", color: "var(--color-blue-500)" },
  mobile: { label: "Iran Military sites", color: "var(--color-sky-300)" },
} satisfies ChartConfig;

export const visitedPagesRows: BreakdownRow[] = [
  { label: "Iran", value: 31 },
  { label: "Saudi Arabia", value: 23 },
  { label: "Israel", value: 18 },
  { label: "Kuwait", value: 12 },
  { label: "Qatar", value: 9 },
  { label: "Yemen", value: 6 },
];

export const countriesRows: BreakdownRow[] = [
  { label: "Iran", value: 27 },
  { label: "Saudi Arabia", value: 14 },
  { label: "Israel", value: 8 },
  { label: "Kuwait", value: 6 },
  { label: "Qatar", value: 4 },
  { label: "Yemen", value: 2 },
];

export const referrersRows: BreakdownRow[] = [
  { label: "Iran", value: 38 },
  { label: "Saudi Arabia", value: 26 },
  { label: "Israel", value: 19 },
  { label: "Qatar", value: 11 },
  { label: "Yemen", value: 8 },
  { label: "Kuwait", value: 5 },
];

export const browsersRows: BreakdownRow[] = [
  { label: "Iran", value: 52 },
  { label: "Saudi Arabia", value: 21 },
  { label: "Israel", value: 14 },
  { label: "Yemen", value: 8 },
  { label: "Other", value: 5 },
];

// Helper per ottenere lo stile di un punto
export const getMarkerStyle = (point: LocationPoint): MarkerStyle => {
  return markerStyles[point.type];
};
