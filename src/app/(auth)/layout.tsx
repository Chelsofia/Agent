"use client";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import rectangle from "../../../public/images/rectangle.png";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const pathname = usePathname();
  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full">
        <div className="relative w-full lg:w-1/2">
          <Image
            src={rectangle}
            alt="Decorative Rectangle"
            quality={100}
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-12 left-12">
            <Image
              src={logo}
              alt="Landest logo"
              quality={100}
              className="w-24 h-auto object-contain"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 lg:px-16 xl:px-32">{children}</div>
      </div>
    </main>
  );
}
