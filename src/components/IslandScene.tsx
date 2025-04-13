// src/components/IslandScene.tsx

const IslandScene = () => {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden island-bg">
        {/* Background Layers */}
        <div className="pixel-hills" />
        <div className="pixel-trees" />
        <div className="pixel-firepits" />
  
        {/* Dino or Dino Egg (stationary or floating) */}
        <img
        //   src="/assets/Dinoegg.png"
        //   alt="Dino Egg"
          className="absolute bottom-6 left-6 w-28 animate-float"
        />
      </div>
    );
  };
  
  export default IslandScene;  