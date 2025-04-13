import PageTitle from "@/components/PageTitle";
import ZoneCard from "@/components/ZoneCard";
import IslandScene from "@/components/IslandScene";
import StickCursor from "@/components/ui/StickCursor";

const TrainingGrounds = () => {
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

      {/* 🌴 Island animation */}
      <IslandScene />

      {/* 🪵 Stick cursor */}
      <StickCursor />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <PageTitle subtitle="Build thy strength for the hunt">
          Training Grounds
        </PageTitle>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <ZoneCard
            zone="Clawstone Crater"
            type="training"
            realLocation="Eppley Rec Center"
          />
          <ZoneCard
            zone="Bone Spear Range"
            type="training"
            realLocation="Ritchie Coliseum"
          />
        </div>
      </div>
    </div>
  );
};

export default TrainingGrounds;