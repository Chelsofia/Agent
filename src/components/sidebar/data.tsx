import { CogIcon, RectangleGroupIcon } from "@heroicons/react/24/outline";
import { Wallet } from "iconsax-react";
import { BiUser } from "react-icons/bi";


export const navItems = [
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <RectangleGroupIcon className="w-5 h-5" />,
  },
  {
    title: "Onboarding",
    to: "/onboarding",
    icon: <RectangleGroupIcon className="w-5 h-5" />,
  },

  {
    title: "Settings",
    to: "/settings",
    icon: <CogIcon className="w-5 h-5" />,
  },
  {
    title: "Referrals",
    to: "/referrals",
    icon: <BiUser className="w-5 h-5" />,
  },
  {
    title: "Wallet",
    to: "/wallet",
    icon: <Wallet className="w-5 h-5" />,
  },
];
