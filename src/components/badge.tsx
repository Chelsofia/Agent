import { FC } from "react";
import { twMerge } from "tailwind-merge";

type BadgeProps = {
  children: string;
  status?: "success" | "failed" | "pending";
};

const badgeStyles: Record<string, string> = {
  registration: "text-green-700 bg-green-50 ring-green-600/20 bg-green-100",
  investment: "text-blue-700 bg-blue-50 ring-blue-600/10 bg-blue-100",
  properties: "text-yellow-700 bg-yellow-50 ring-yellow-600/10 bg-yellow-100",
  default: "text-gray-700 bg-gray-50 ring-gray-600/10 bg-gray-100",
};

const statusStyles: Record<string, string> = {
  success: "text-green-700 bg-green-50 ring-green-600/20 bg-green-100",
  failed: "text-red-700 bg-red-50 ring-red-600/20 bg-red-100",
  pending: "text-orange-700 bg-orange-50 ring-orange-600/20 bg-orange-100",
};

export const Badge: FC<BadgeProps> = ({ children, status }) => {
  // Determine type style based on children text
  const badgeTypeStyle =
    badgeStyles[children.toLowerCase()] || badgeStyles.default;

  // Determine status style if status is provided
  const badgeStatusStyle = status ? statusStyles[status] : "";

  // Merge styles
  const badgeStyle = twMerge(
    "inline-flex items-center rounded-md px-3 py-[2px] text-[12px] font-medium capitalize",
    badgeTypeStyle,
    badgeStatusStyle
  );

  return <span className={badgeStyle}>{children}</span>;
};
