"use client";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/badge";
import SearchBar from "@/components/searchBar";
import Table from "@/components/sidebar/tableSection";
import { referralsData } from "../referrals/data"; 

const Referrals = () => {
  const [filter, setFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value.toLowerCase());
  };

  const filteredData = referralsData
    .filter(
      (item) =>
        filter === "All" || item.type.toLowerCase() === filter.toLowerCase()
    )
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery) ||
        item.id.toLowerCase().includes(searchQuery)
    );

  const rows = filteredData.map((item, index) => [
    <Link
      key={item.id}
      href={`/referrals/${item.id}`}
      className="text-blue-500 hover:underline"
    >
      {item.name}
    </Link>,
    <Badge key={index}>{item.type}</Badge>,
    item.amount,
    item.date,
    <Link href={`/referrals/${item.id}`}>
      <button key={index} className="text-blue-500 hover:underline">
        View More
      </button>
    </Link>,
  ]);

  return (
    <div className="container mx-64 px-4">
      <h1 className="text-2xl font-bold mb-4">Referral Dashboard</h1>

      <div className="mb-4 flex justify-end">
        <SearchBar
          placeholder="Search customers by name or user ID"
          onChange={handleSearchChange}
        />
      </div>

      {/* Filter Buttons */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => handleFilterChange("All")}
          className={`px-4 py-2 rounded ${
            filter === "All"
              ? "bg-orange-500 text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-orange-600`}
        >
          All Referrals
        </button>
        <button
          onClick={() => handleFilterChange("Registration")}
          className={`px-4 py-2 rounded ${
            filter === "Registration"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-blue-600`}
        >
          Registration
        </button>
        <button
          onClick={() => handleFilterChange("Investment")}
          className={`px-4 py-2 rounded ${
            filter === "Investment"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-green-600`}
        >
          Investment
        </button>
        <button
          onClick={() => handleFilterChange("Properties")}
          className={`px-4 py-2 rounded ${
            filter === "Properties"
              ? "bg-yellow-500 text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-yellow-600`}
        >
          Properties
        </button>
      </div>

      {/* Table Component */}
      <Table
        headers={[
          "Full Name",
          "Commission Type",
          "Amount Earned",
          "Event Date",
          "Actions",
        ]}
        rows={rows}
      />
    </div>
  );
};

export default Referrals;
