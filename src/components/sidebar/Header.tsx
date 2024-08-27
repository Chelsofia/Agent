"use client";
import { useState, useEffect } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { BellIcon, UserIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";
import { useModal } from "../modal";
import { ProfileDetails } from "./ProfileDetails";
import { Menu } from "iconsax-react";

interface HeaderProps {
  title?: string;
  children?: ReactNode;
  isTime?: boolean;
  onClick: () => void;
}

const HeaderWrapper = ({
  title,
  isTime,
  children,
  onClick,
}: HeaderProps) => {
  const { Modal, showModal } = useModal();
  const [currentTime, setCurrentTime] = useState<string>("");
  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const formattedDate = now.toLocaleDateString(undefined, options);
      setCurrentTime(formattedDate);
    };

    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 60000); // Update every minute

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div>
      <header className="sticky w-full top-0 left-0 z-[2] bg-[#fff]">
        <div className="border w-full px-8 lg:pr-12 lg:pl-[280px]">
          <div className="flex items-center justify-between h-[60px]">
            <div>
              {isTime && (
                <div className="flex items-center gap-4">
                  <CalendarIcon className="w-6 h-6 text-[#344054]" />
                  <div>
                    <p className="text-[12px]">{`Today's Date`}</p>
                    <p className="text-[12px] font-bold text-[#344054]">
                      {currentTime}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-5">
              <button
                onClick={onClick}
                className="w-[40px] h-[40px] lg:hidden flex justify-center items-center bg-[#ff8c001a] rounded-full"
              >
                <Menu variant="Bold" className="w-5 h-5 text-secondary" />
              </button>
              <div className="relative">
                <BellIcon className="w-6 h-6 text-primary" />
                <span className="w-4 h-4 rounded-full bg-secondary flex justify-center items-center text-sm text-white absolute -right-1 -top-2">
                  4
                </span>
              </div>
              <button
                onClick={() => {
                  showModal(true);
                }}
                className="w-[40px] h-[40px] flex justify-center items-center bg-[#ff8c001a] rounded-full"
              >
                <UserIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        </div>
        {title && (
          <div className="lg:flex items-center justify-between lg:pr-12 lg:pl-[280px] px-8 border-b  py-4">
            <h1 className="text-[18px] font-[600]">
             {title}
            </h1>
            <div className="mt-4 lg:mt-0">{children}</div>
          </div>
        )}
      </header>
      <Modal scale="lg" className="!absolute right-10 top-12">
        <ProfileDetails />
      </Modal>
    </div>
  );
};

export default HeaderWrapper;
