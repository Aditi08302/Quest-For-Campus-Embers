import PageTitle from "@/components/PageTitle";
import ZoneCard from "@/components/ZoneCard";
import IslandScene from "@/components/IslandScene";
import StickCursor from "@/components/ui/StickCursor";

const FeedingZones = () => {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/assets/bg2.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 🔥 Overlay for prehistoric vibe */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3C1A4Bcc] via-[#FF6B35aa] to-[#FCA17D66] z-0" />

      {/* 🌴 Island backdrop */}
      <IslandScene />

      {/* 🪵 Primitive cursor */}
      <StickCursor />

      {/* Page content */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <PageTitle subtitle="Find nourishment for thy tribe">
          Feeding Zones
        </PageTitle>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <ZoneCard
            zone="Mosspit"
            type="feeding"
            realLocation="Yahentamitsi Dining"
          />
          <ZoneCard
            zone="Riverfang"
            type="feeding"
            realLocation="South Campus Dining"
          />
          <ZoneCard
            zone="Stonegrill"
            type="feeding"
            realLocation="251 North"
          />
        </div>
      </div>
    </div>
  );
};

export default FeedingZones;
