import { FC } from "react";
import { twMerge } from "tailwind-merge";

type BadgeProps = {
  children: string;
};

const badgeStyles: Record<string, string> = {
  registration: "text-green-700 bg-green-50 ring-green-600/20 bg-green-100",
  investment: "text-blue-700 bg-blue-50 ring-blue-600/10 bg-blue-100",
  properties: "text-yellow-700 bg-yellow-50 ring-yellow-600/10 bg-yellow-100",
  default: "text-gray-700 bg-gray-50 ring-gray-600/10 bg-gray-100",
};

export const Badge: FC<BadgeProps> = ({ children }) => {
  const badgeStyle = badgeStyles[children.toLowerCase()] || badgeStyles.default;

  return (
    <span
      className={twMerge(
        "inline-flex items-center rounded-md px-3 py-[2px] text-[12px] font-medium capitalize",
        badgeStyle
      )}
    >
      {children}
    </span>
  );
};
