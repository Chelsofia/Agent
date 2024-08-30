"use client"
import { useState } from "react";
import Profile from "./profile";
import Security from "./security";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState<"profile" | "security">("profile");

  const renderContent = () => {
    if (activeTab === "profile") {
      return <Profile />;
    } else if (activeTab === "security") {
      return <Security />;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="flex space-x-4 mb-6">
        <button
          className={`py-2 px-4 rounded ${
            activeTab === "profile"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button
          className={`py-2 px-4 rounded ${
            activeTab === "security"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveTab("security")}
        >
          Security
        </button>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default SettingsPage;
