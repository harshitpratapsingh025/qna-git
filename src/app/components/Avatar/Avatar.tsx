import React from "react";

interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const getInitials = (name: string): string => {
  const words = name.trim().split(" ");
  const initials =
    words.length >= 2
      ? words[0][0] + words[1][0]
      : words[0].substring(0, 2);
  return initials.toUpperCase();
};

const sizeMap = {
  sm: "w-8 h-8 text-sm",
  md: "w-12 h-12 text-base",
  lg: "w-16 h-16 text-lg",
};

export const Avatar: React.FC<AvatarProps> = ({
  name,
  size = "md",
  className = "",
}) => {
  const initials = getInitials(name);

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-semibold shadow-md ${sizeMap[size]} ${className}`}
      title={name}
    >
      {initials}
    </div>
  );
};

