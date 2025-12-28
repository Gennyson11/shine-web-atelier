import React from "react";

interface HeartIconProps {
  className?: string;
  size?: number;
}

const HeartIcon: React.FC<HeartIconProps> = ({ className = "", size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="heartGradient" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="hsl(15 90% 60%)" />
          <stop offset="50%" stopColor="hsl(330 81% 60%)" />
          <stop offset="100%" stopColor="hsl(271 81% 56%)" />
        </linearGradient>
      </defs>
      <path
        d="M24 44C24 44 4 30.5 4 17.5C4 11.5 9 6 15.5 6C19.5 6 23 8.5 24 11C25 8.5 28.5 6 32.5 6C39 6 44 11.5 44 17.5C44 30.5 24 44 24 44Z"
        fill="url(#heartGradient)"
      />
    </svg>
  );
};

export default HeartIcon;
