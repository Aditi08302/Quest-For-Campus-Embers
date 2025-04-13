import { useEffect, useState } from "react";

const StickCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <img
      src="/assets/stick.png"
      alt="Scraping Stick"
      className="fixed pointer-events-none z-50"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: "150px",
        transform: "translate(-50%, -180%) rotate(260deg)", // rotate it down and flip
        transformOrigin: "bottom center", // this anchors rotation from bottom
      }}
    />
  );
};

export default StickCursor;
