"use client";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/badge";
import SearchBar from "@/components/searchBar";
import Table from "@/components/tableSection";


import {
  AiOutlineAppstore,
  AiOutlineUser,
  AiOutlineDollarCircle,
  AiOutlineHome,
} from "react-icons/ai";
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
    <div className="container mx-64 px-4 w-[80%]">
      <div className="mt-4 flex gap-2">
        <SearchBar
          placeholder="Search customers by name or user ID"
          onChange={handleSearchChange}
        />

        <button
          onClick={() => handleFilterChange("All")}
          className={`px-16 rounded border flex items-center space-x-2 gap-2 text-sm ${
            filter === "All"
              ? "bg-orange-500 text-white"
              : "border-gray-300 text-gray-700"
          } hover:bg-orange-600`}
        >
          <AiOutlineAppstore />
          All Referrals
        </button>

        <button
          onClick={() => handleFilterChange("Registration")}
          className={`px-9 border flex items-center gap-2 text-sm ${
            filter === "Registration"
              ? "bg-green-500 text-white"
              : "border-gray-300 text-gray-700"
          } hover:bg-green-600`}
        >
          <AiOutlineUser />
          Registration
        </button>

        <button
          onClick={() => handleFilterChange("Investment")}
          className={`px-9 rounded border flex items-center gap-2 text-sm ${
            filter === "Investment"
              ? "bg-blue-500 text-white"
              : "border-gray-300 text-gray-700"
          } hover:bg-blue-600`}
        >
          <AiOutlineDollarCircle />
          Investment
        </button>

        <button
          onClick={() => handleFilterChange("Properties")}
          className={`px-9  rounded border flex items-center gap-2 text-sm ${
            filter === "Properties"
              ? "bg-yellow-500 text-white"
              : "border-gray-300 text-gray-700"
          } hover:bg-yellow-600`}
        >
          <AiOutlineHome />
          Properties
        </button>
      </div>

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
