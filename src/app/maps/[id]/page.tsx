import {
  Map as MapComponent,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerTooltip,
} from "@/components/ui/map";
import { BreakdownCard } from "./components/breakdown-card";
import { OverviewCard } from "./components/overview-card";
import {
  browsersRows,
  countriesRows,
  getMarkerStyle,
  LocationPoint,
  locations,
  referrersRows,
  visitedPagesRows,
} from "./data";

const MAP_HEIGHT = "40rem";

interface ViewMapPageProps {
  params: Promise<{
    id: string;
  }>;
}

function MapControlsCard() {
  return (
    <div className="border-border/40 bg-background/70 absolute top-4 right-4 z-20 flex items-center gap-3 rounded-lg border px-2.5 py-1.5 backdrop-blur-sm">
      <div className="flex items-center gap-3 text-xs">

        <div className="flex items-center gap-1.5">
          <div className="size-2.5 shrink-0 rounded-full border border-blue-300 bg-blue-500 ring-2 ring-blue-300/50 ring-offset-1 shadow-sm" />
          <span>US Strikes</span>
        </div>

        <div className="bg-border h-4 w-px" />

        <div className="flex items-center gap-1.5">
          <div className="size-2.5 shrink-0 rounded-full border border-sky-300 bg-sky-400 ring-2 ring-sky-400/50 ring-offset-1 shadow-sm" />
          <span>Iran Retaliatory Strikes</span>
        </div>

        <div className="bg-border h-4 w-px" />

        <div className="flex items-center gap-1.5">
          <div className="size-2.5 shrink-0 rounded-sm border border-slate-200 bg-slate-400 shadow-sm" />
          <span>US Military Sites</span>
        </div>

        <div className="bg-border h-4 w-px" />

        <div className="flex items-center gap-1.5">
          <div className="size-2.5 shrink-0 rounded-full border border-teal-200 bg-teal-400 shadow-sm" />
          <span>Chokepoints</span>
        </div>

        <div className="bg-border h-4 w-px" />

        <div className="flex items-center gap-1.5">
          <div className="size-2.5 shrink-0 rounded-full border border-yellow-200 bg-yellow-400 shadow-sm" />
          <span>Oil Tanker Traffic</span>
        </div>

      </div>
    </div>
  );
}

export default async function ViewMapPage({ params }: ViewMapPageProps) {
  const { id } = await params;
  console.log("Map ID:", id);

  return (
    <div
      className="bg-background relative min-h-screen"
      style={{ "--map-height": MAP_HEIGHT } as React.CSSProperties}
    >
      <div className="relative h-(--map-height)">
        <MapControlsCard />
        <MapComponent
          center={[54.0, 27.0]}
          zoom={3.8}
          scrollZoom={true}
          renderWorldCopies={true}
        >
          <MapControls showFullscreen />
          {locations.map((location: LocationPoint) => (
            <MapMarker
              key={location.city}
              longitude={location.lng}
              latitude={location.lat}
            >
              <MarkerContent>
                <div
                  className={`
                    ${getMarkerStyle(location).color} 
                    ${getMarkerStyle(location).border}
                    ${getMarkerStyle(location).hoverScale}
                    ${getMarkerStyle(location).activeScale}
                    ${getMarkerStyle(location).shape === "square" ? "rounded-sm" : "rounded-full"}
                    ${location.type === "us_strike" || location.type === "iran_retaliatory_strike" ? "ring-2 ring-white/30 ring-offset-1 ring-offset-transparent" : ""}
                    ${location.activeStrike
                      ? location.type === "us_strike"
                        ? "animate-strikeBluePulse"
                        : "animate-strikeSkyPulse"
                      : ""
                    }
                    opacity-90
                    hover:opacity-100
                    transition-all
                    duration-200
                    cursor-pointer
                  `}
                  style={{
                    width: location.size * 2,
                    height: location.size * 2,
                  }}
                />
              </MarkerContent>
              <MarkerTooltip
                offset={20}
                className="bg-background text-foreground border"
              >
                <p className="text-muted-foreground font-medium">
                  {location.city}
                </p>
                <p className="mt-0.5">{location.type}</p>
              </MarkerTooltip>
            </MapMarker>
          ))}
        </MapComponent>
        <div
          className="via-background/30 to-background pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent"
          aria-hidden
        />
        <OverviewCard />
      </div>

      <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <BreakdownCard title="Us Military sites" rows={visitedPagesRows} />
        <BreakdownCard title="Iran Military sites" rows={referrersRows} />
        <BreakdownCard title="Chokepoints" rows={countriesRows} />
        <BreakdownCard title="Oli tanker traffic" rows={browsersRows} />
      </div>
    </div>
  );
}
