import React from "react";
import { getInitials } from "@/utils/getInitials";

interface AvatarProps {
  name: string;
  size?: string;
  textSize?: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  name,
  size = "32",
  textSize = "12",
  className,
}) => {
  return (
    <span
      className={`relative inline-flex items-center justify-center rounded-full text-primary  bg-white ${className}`}
      style={{
        height: `${size}px`,
        width: `${size}px`,
      }}
    >
      <span
        className={`text-xs uppercase leading-none  font-[600]`}
        style={{
          fontSize: `${textSize}px`,
        }}
      >
        {getInitials(name)}
      </span>
    </span>
  );
};

export default Avatar;
