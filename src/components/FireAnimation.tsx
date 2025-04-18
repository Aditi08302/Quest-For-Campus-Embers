
// import { Flame } from "lucide-react";

// interface FireAnimationProps {
//   size?: "sm" | "md" | "lg";
// }

// const FireAnimation = ({ size = "md" }: FireAnimationProps) => {
//   const sizeClasses = {
//     sm: "w-6 h-6",
//     md: "w-10 h-10",
//     lg: "w-16 h-16",
//   };

//   return (
//     <div className="fire-container">
//       <div className={`relative ${sizeClasses[size]} flex items-center justify-center`}>
//         <div className="absolute inset-0 bg-ember/20 rounded-full animate-fire-pulse" style={{ animationDelay: '0.3s' }}></div>
//         <div className="absolute inset-1 bg-ember/30 rounded-full animate-fire-pulse" style={{ animationDelay: '0.2s' }}></div>
//         <div className="absolute inset-2 bg-ember/50 rounded-full animate-fire-pulse" style={{ animationDelay: '0.1s' }}></div>
//         <Flame className="relative z-10 text-ember-light animate-fire-pulse" size={size === "sm" ? 16 : size === "md" ? 24 : 32} />
//       </div>
//     </div>
//   );
// };

// export default FireAnimation;

// src/components/FireAnimation.tsx

interface FireAnimationProps {
  size?: "sm" | "md" | "lg";
}

const FireAnimation = ({ size = "md" }: FireAnimationProps) => {
  const sizeClasses = {
    sm: "w-9 h-12",  // slightly larger to fit GIF aspect
    md: "w-12 h-14",
    lg: "w-20 h-24",
  };

  return (
    <div className={`fire-container relative ${sizeClasses[size]}`}>
      <img
        src="/assets/logo2.gif"
        alt="Fire Animation"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default FireAnimation;
