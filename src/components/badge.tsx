import { FC } from "react";
import { twMerge } from "tailwind-merge";

type BadgeProps = JSX.IntrinsicElements["span"] & {
  children: string;
};

const badgeStyles: Record<string, string[]> = {
  success: ["active", "available", "approved", "successful", "administrator","owner","admin"],
  error: ["inactive", "failed", "declined"],
  warning: ["pending", "awaiting approval"],
  info: ["blocked","agent"],
};

const getBadgeStyle = (text: string): keyof typeof styles | null => {
  for (const [style, texts] of Object.entries(badgeStyles)) {
    if (texts.includes(text)) {
      return style as keyof typeof styles;
    }
  }
  return null;
};

const styles = {
  success: "text-green-700 bg-green-50 ring-green-600/20 bg-green-100",
  error: "text-red-700 bg-transparent ring-gray-600/10 bg-red-100",
  warning: "text-yellow-700 bg-yellow-50 ring-yellow-600/10 bg-yellow-100",
  info: "text-blue-700 bg-blue-50 ring-blue-600/10 bg-blue-100",
};

export const Badge: FC<BadgeProps> = ({ children }) => {
  const badgeStyleKey = getBadgeStyle(children);
  const badgeStyle = badgeStyleKey ? styles[badgeStyleKey] : "";

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
