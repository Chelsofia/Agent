"use client";
import Navbar from "./Navbar";
import { PowerIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Logo from "../logo";
import { useRouter } from "next/navigation";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  org?: { organization_name: string; status: string };
}

const Sidebar = ({ open, setOpen, org }: SidebarProps) => {
  const { push } = useRouter();

  return (
    <nav
      className={`bg-primary w-[250px] duration-[0.5s] fixed top-0 ${
        open ? "left-0" : "-left-[300px]"
      } lg:left-0 z-[10] h-full`}
    >
      <XCircleIcon
        onClick={() => setOpen(false)}
        className="w-14 cursor-pointer lg:hidden block h-14 absolute -right-16 top-4 text-black"
      />
      <div className="px-5">
        <Logo />
      </div>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed -z-10 top-0 lg:hidden block left-0 w-full h-full bg-[#0000007c]"
        />
      )}
      <div className="px-5 py-8"></div>
      <div className="px-5 h-[300px] overflow-x-hidden overflow-y-auto side">
        <Navbar setOpen={setOpen} />
      </div>

      {/* Profile Section */}
      <div className="mt-auto p-5 flex items-center justify-between bg-navy-900">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-pink-100 rounded-full">
            <span className="text-black font-bold">OM</span>
          </div>
          <div>
            <p className="text-white font-semibold">Omawunmi</p>
            <p className="text-gray-400 text-sm">Oma@rayna.ui</p>
          </div>
        </div>
   
      </div>
    </nav>
  );
};

export default Sidebar;
