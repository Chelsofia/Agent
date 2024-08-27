"use client";
import Navbar from "./Navbar";
import {CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { PowerIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useModal } from "../modal";
import Heading from "../heading/Heading";
import { Button } from "../button";
import { useRouter } from "next/navigation";

interface Siderbarprops {
  open: boolean;
  setOpen: (open: boolean) => void;
  org?: { organization_name: string; status: string };
}
const Sidebar = ({ open, setOpen, org }: Siderbarprops) => {
  const { push } = useRouter();
  const { Modal, showModal } = useModal();
  const value = 0.30;
  return (
    <nav
      className={`bg-primary w-[250px] duration-[0.5s] fixed top-0 ${
        open ? "left-0" : "-left-[300px]"
      } lg:left-0  z-[10] h-full`}
    >
      <XCircleIcon
        onClick={() => setOpen(false)}
        className="w-14 cursor-pointer lg:hidden block h-14 absolute -right-16 top-4 text-black"
      />
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed -z-10 top-0 lg:hidden block left-0 w-full h-full bg-[#0000007c]"
        />
      )}
      <div className="px-5 py-16">
      
      </div>
      <div className="px-5 h-[300px] overflow-x-hidden overflow-y-auto side">
        <Navbar setOpen={setOpen} />
      </div>
      
      <Modal>
        <div className="flex flex-col justify-center gap-6 mt-8">
          <Heading>Are you sure you want to logout?</Heading>
          <PowerIcon className="w-12 h-12 text-red-500 mx-auto" />
          <div className="flex  items-center gap-6">
            <Button
              onClick={() => {
                push("/");
              }}
              className="!py-3"
              isFullWidth
            >
              Continue
            </Button>
            <Button
              onClick={() => {
                showModal(false);
              }}
              className="!py-3"
              isFullWidth
              color="danger"
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </nav>
  );
};

export default Sidebar;
