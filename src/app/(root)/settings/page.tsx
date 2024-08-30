"use client";
import HeaderWrapper from "@/components/sidebar/Header";
import SettingsPage from "@/components/settings/settingsPage"
import { useState } from "react";


const Settings = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderWrapper
        onClick={() => setOpen(!open)}
        title={"Settings"}
        isTime={true}
      />
  
    <SettingsPage/>
    </>
  );
      }

      export default Settings;