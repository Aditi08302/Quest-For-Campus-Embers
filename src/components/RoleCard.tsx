import { Role } from "@/types/game";

interface RoleCardProps {
  role: Role;
  selected: boolean;
  onClick: () => void;
}

const RoleCard = ({ role, selected, onClick }: RoleCardProps) => {
  const getRoleIcon = () => {
    switch (role) {
      case "Hunter":
        return (
          <img
            src="/assets/axe.png"
            alt="Hunter Icon"
            className="w-12 h-12 object-contain"
          />
        );
      case "Tracker":
        return (
          <img
            src="/assets/foot.png"
            alt="Tracker Icon"
            className="w-12 h-12 object-contain"
          />
        );
      case "Gatherer":
        return (
          <img
            src="/assets/basket.png"
            alt="Gatherer Icon"
            className="w-12 h-12 object-contain rounded-sm"
          />
        );
    }
  };

  const getRoleDescription = () => {
    switch (role) {
      case "Hunter":
        return "Strong and brave, hunters excel at gathering food for the tribe.";
      case "Tracker":
        return "Keen eyes and sharp senses make trackers the best pathfinders.";
      case "Gatherer":
        return "Wise and resourceful, gatherers collect the bounty of nature.";
    }
  };

  return (
    <div
    className={`role-card p-4 rounded-lg cursor-pointer border-4 transition transform hover:scale-105 animate-flip-in ${
      selected
        ? "border-amber-500 shadow-[0_0_10px_rgba(255,107,53,0.6)]"
        : "border-transparent"
    } ${
      role === "Hunter"
        ? "hover:shadow-[0_0_30px_rgba(255,0,0,0.5)]"
        : role === "Tracker"
        ? "hover:shadow-[0_0_30px_rgba(0,0,255,0.5)]"
        : "hover:shadow-[0_0_30px_rgba(0,128,0,0.5)]"
    }`}    
      onClick={onClick}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center">
          {getRoleIcon()}
        </div>
        <h3 className="font-pixel text-lg text-black">{role}</h3>
        <p className="text-sm text-muted-foreground text-center">
          {getRoleDescription()}
        </p>
      </div>
    </div>
  );
};

export default RoleCard;