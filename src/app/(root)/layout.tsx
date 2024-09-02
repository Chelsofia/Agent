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

const AppLayout = ({ children, isBlur, }: WrapperProps) => {
  const [open, setOpen] = useState(false);
 
  return (
    <div className={`${isBlur ? "blur-md" : ""}`}>
      <Sidebar setOpen={setOpen} open={open} />
      
        {children}
       
        
        
      </div>
   
  );
};

export default AppLayout;
