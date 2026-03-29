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
          <div className="size-2.5 shrink-0 rounded-full border border-white bg-sky-500 shadow-sm" />
          <span>US military sites</span>
        </div>
        <div className="bg-border h-4 w-px" />
        <div className="flex items-center gap-1.5">
          <div className="size-2.5 shrink-0 rounded-full border border-white bg-sky-400 shadow-sm" />
          <span>Iran military sites</span>
        </div>
        <div className="bg-border h-4 w-px" />
        <div className="flex items-center gap-1.5">
          <div className="size-2.5 shrink-0 rounded-full border border-white bg-sky-300 shadow-sm" />
          <span>Chokepoints</span>
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
          {locations.map((location) => (
            <MapMarker
              key={location.city}
              longitude={location.lng}
              latitude={location.lat}
            >
              <MarkerContent>
                <div
                  className="rounded-full bg-blue-500/70"
                  style={{
                    width: location.size * 3,
                    height: location.size * 3,
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
                <p className="mt-0.5">{location.size} active conflict areas</p>
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
