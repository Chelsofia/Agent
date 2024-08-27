"use client";
import { ReactNode, useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Pagination from "@/components/pagination/Pagination";

interface WrapperProps {
  children: ReactNode;
  headerChildren?: ReactNode;
  isTime?: boolean;
  title?: string;
  isBlur?: boolean;
  PaginationProps?: {
    itemsPerPage?: number;
    totalItems: number;
    handlePageClick: (selectedPage: number) => void;
    currentPage: number;
  };
}

const AppLayout = ({ children, isBlur, PaginationProps }: WrapperProps) => {
  const [open, setOpen] = useState(false);
 console.log("Pagination Props:", PaginationProps); 
  return (
    <div className={`${isBlur ? "blur-md" : ""}`}>
      <Sidebar setOpen={setOpen} open={open} />
      <div className="overflow-hidden px-8 lg:px-0">
        {children}
        {PaginationProps && (
          <div className="mt-4 flex justify-center">
            <Pagination {...PaginationProps} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AppLayout;
