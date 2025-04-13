import { useEffect, useState } from "react";

const FlameDustDisintegrate = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 0.5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 z-50 pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="w-1 h-1 rounded-full bg-amber-400 opacity-80 animate-dust-fly"
          style={{
            position: "absolute",
            left: p.left,
            top: p.top,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FlameDustDisintegrate;
