import type { ChartConfig } from "@/components/ui/chart";

export interface LocationPoint {
  city: string;
  lng: number;
  lat: number;
  size: number;
}

export interface BreakdownRow {
  label: string;
  value: number;
}

export const locations: LocationPoint[] = [
  { city: "San Francisco", lng: -122.4194, lat: 37.7749, size: 16 },
  { city: "New York", lng: -74.006, lat: 40.7128, size: 15 },
  { city: "Toronto", lng: -79.3832, lat: 43.6532, size: 11 },
  { city: "Mexico City", lng: -99.1332, lat: 19.4326, size: 10 },
  { city: "Sao Paulo", lng: -46.6333, lat: -23.5505, size: 12 },
  { city: "Buenos Aires", lng: -58.3816, lat: -34.6037, size: 9 },
  { city: "London", lng: -0.1276, lat: 51.5074, size: 14 },
  { city: "Berlin", lng: 13.405, lat: 52.52, size: 11 },
  { city: "Paris", lng: 2.3522, lat: 48.8566, size: 13 },
  { city: "Madrid", lng: -3.7038, lat: 40.4168, size: 10 },
  { city: "Cairo", lng: 31.2357, lat: 30.0444, size: 9 },
  { city: "Lagos", lng: 3.3792, lat: 6.5244, size: 10 },
  { city: "Mumbai", lng: 72.8777, lat: 19.076, size: 13 },
  { city: "Dubai", lng: 55.2708, lat: 25.2048, size: 11 },
  { city: "Seoul", lng: 126.978, lat: 37.5665, size: 12 },
  { city: "Singapore", lng: 103.8198, lat: 1.3521, size: 10 },
  { city: "Tokyo", lng: 139.6917, lat: 35.6895, size: 12 },
  { city: "Sydney", lng: 151.2093, lat: -33.8688, size: 9 },
  { city: "Auckland", lng: 174.7633, lat: -36.8485, size: 8 },
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
  { name: "Us sites", value: 12, fill: "var(--color-blue-500)" },
  { name: "Iran sites", value: 22, fill: "var(--color-sky-400" },
  { name: "Chokepoints", value: 8, fill: "var(--color-sky-300)" },
];

export const deviceCategoryChartConfig = {
  desktop: { label: "Us Military sites", color: "var(--color-blue-500)" },
  mobile: { label: "Iran Military sites", color: "var(--color-sky-300)" },
  tablet: { label: "Chokepoints", color: "var(--color-sky-400)" },
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
