"use client";
import { useEffect, useState } from "react";
import HeaderWrapper from "@/components/sidebar/Header";
import ProfileContent from "@/components/ProfileContent";
import SecurityContent from "@/components/SecurityContent";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
     const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("profile");

  useEffect(() => {
    // Parse the URL to get the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get("tab");

    // Set the active tab based on the query parameter
    setActiveTab(tab === "security" ? "security" : "profile");
  }, []);

  const handleTabChange = (selectedTab: string) => {
    // Update the query parameter in the URL
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("tab", selectedTab);
    window.history.pushState(null, "", `?${searchParams.toString()}`);

    // Update the active tab state
    setActiveTab(selectedTab);
  };

  return (
    <>
      <HeaderWrapper
        onClick={() => setOpen(!open)}
        title={"Settings"}
        isTime={true}
      />
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        {/* Tabs */}
        <div className="flex  mb-6">
          <button
            className={`px-4 py-2 ml-8 bg-white shadow-md  ${
              activeTab === "profile"
                ? "text-gray-800 bg-gray-300"
                : "text-gray-600"
            }`}
            onClick={() => handleTabChange("profile")}
          >
            Profile
          </button>
          <button
            className={`px-4 py-2 ml-6 bg-white shadow-md ${
              activeTab === "security"
                ? "text-gray-800 bg-gray-300"
                : "text-gray-600"
            }`}
            onClick={() => handleTabChange("security")}
          >
            Security
          </button>
        </div>

        <div className="ml-8">
          {activeTab === "profile" && <ProfileContent />}
          {activeTab === "security" && <SecurityContent />}
        </div>
      </div>
    </>
  );
};

export default SettingsLayout;
