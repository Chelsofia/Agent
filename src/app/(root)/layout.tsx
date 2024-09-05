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
  paginationProps?: {
    itemsPerPage?: number;
    totalItems: number;
    handlePageClick: (selectedPage: number) => void;
    currentPage: number;
  };
}

const AppLayout = ({ children, isBlur, paginationProps }: WrapperProps) => {
  const [open, setOpen] = useState(false);

  // Set default values for paginationProps if not provided
  const defaultPaginationProps = {
    itemsPerPage: 10,
    totalItems: 50,
    handlePageClick: (page: number) => console.log("Selected Page:", page),
    currentPage: 1,
  };

  const finalPaginationProps = paginationProps || defaultPaginationProps;

  return (
    <div className={`${isBlur ? "blur-md" : ""}`}>
      <Sidebar setOpen={setOpen} open={open} />
      {children}

      {finalPaginationProps && (
        <Pagination
          itemsPerPage={finalPaginationProps.itemsPerPage}
          totalItems={finalPaginationProps.totalItems}
          handlePageClick={finalPaginationProps.handlePageClick}
          currentPage={finalPaginationProps.currentPage}
        />
      )}
    </div>
  );
};

export default AppLayout;
