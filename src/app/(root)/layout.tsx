"use client";
import { ReactNode, useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import HeaderWrapper from "@/components/sidebar/Header";
import Pagination from "@/components/pagination/Pagination";

interface WrapperProps {
  children: ReactNode;
  headerChildren?: ReactNode;
  isTime?: boolean;
  title?: string;
  isBlur?: boolean;
  paginationProps?: {
    itemsPerPage?: number;
    totalItems: number;
    handlePageClick: (selectedPage: number) => void;
    currentPage: number;
  };
}

const AppLayout = ({ children, isBlur, paginationProps }: WrapperProps) => {
  const [open, setOpen] = useState(false);
 console.log('Pagination Props:', paginationProps); 
  return (
    <div className={`${isBlur ? "blur-md" : ""}`}>
      <Sidebar setOpen={setOpen} open={open} />
      
      <div className="overflow-hidden px-8 lg:px-0">
        {children}
        {paginationProps && (
          <div className="mt-4 flex justify-center">
            <Pagination {...paginationProps} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AppLayout;
