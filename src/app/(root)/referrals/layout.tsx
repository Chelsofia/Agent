"use client";
import HeaderWrapper from "@/components/sidebar/Header";
import { useState } from "react";
const ReferralsLayout = ({ children }: { children: React.ReactNode }) => {

     const [open, setOpen] = useState(false);
    return (
      <div>
        <HeaderWrapper
          onClick={() => setOpen(!open)}
          title={"Refferals"}
          isTime={true}
        />
        {children}
      </div>
    );
}
export default ReferralsLayout;