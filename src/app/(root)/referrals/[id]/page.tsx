"use client";
import { referralsData } from "../data";
import { useState } from "react";
import SearchBar from "@/components/searchBar";
import Image from "next/image";
 import { VscCheck } from "react-icons/vsc"; 
 import GoBackButton from "@/components/sidebar/GoBackButton";
import { VscFilter } from "react-icons/vsc";
import Table from "@/components/tableSection"; 

interface Referral {
  id: string;
  name: string;
  type: string;
  amount: string;
  date: string;
}

interface ReferralPageProps {
  params: {
    id: string;
  };
}


export default function ReferralPage({ params }: ReferralPageProps) {
 
const [searchQuery, setSearchQuery] = useState<string>("");
const [filter, setFilter] = useState<string>("All");


const handleSearchChange = (value: string) => {
  setSearchQuery(value.toLowerCase());
};


  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

 const { id } = params;
  // Fetching the referral based on the ID
  const referral = referralsData.find((ref) => ref.id === id);

  if (!referral) {
    return <div>Referral not found</div>;
  }

  const [open, setOpen] = useState(false);

 
  const headers = [
    "Event",
    "Commission Type",
    "Amount Earned",
    "Event Date",
    "Actions",
  ];

  // Filter the referrals data based on the current referral's type 
  const filteredData = referralsData.filter(
    (ref) => ref.name === referral.name
  );

  
  const rows = filteredData.map((ref) => [
    ref.event,
    <span
      key={ref.id}
      className={`px-2 py-1 text-xs font-semibold rounded-full ${
        ref.type === "Registration"
          ? "bg-green-100 text-green-600"
          : ref.type === "Investment"
          ? "bg-blue-100 text-blue-600"
          : "bg-yellow-100 text-yellow-600"
      }`}
    >
      {ref.type}
    </span>,
    ref.amount,
    ref.date,
    <button key={`action-${ref.id}`} className="text-blue-600 hover:underline">
      View Investment
    </button>,
  ]);

  return (
    <>
   

      <div className="container mx-64 px-4 w-[80%] bg-gray-200">
        <div>
          <GoBackButton />
          
        </div>
        <div className="flex items-start gap-3 p-3">
          <div className="relative">
            <Image
              src={referral.image}
              width={40}
              height={40}
              alt="image"
              className="rounded-full border-2 border-gray-300"
            />
            <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1">
              <VscCheck size={10} className="text-white" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-xl font-semibold">{referral.name}</h1>
            <h5 className="text-sm text-gray-600">{referral.email}</h5>
          </div>
        </div>
        <br></br>
        <div className="relative inline-block ml-4">
          <span className="text-xs font-semibold text-gray-700">Overview</span>
          <hr className="absolute bottom-0 left-0 w-16 border-black" />
        </div>
        <br></br> <br></br>
        <div className="flex bg-gray-200 gap-4 justify-center">
          <div className="bg-white p-4 rounded-md w-[50%] flex flex-col justify-between h-[150px]">
            <p className="text-xs text-[#667185]">Total investments</p>
            <h2 className="text-xl text-[#667185] font-bold mt-auto">
              ₦3,000,000.00
            </h2>
            <a
              href="#"
              className="flex items-center text-yellow-300 hover:underline text-sm mt-2"
            ></a>
          </div>

          <div className="bg-white p-4 rounded-md w-[50%] flex flex-col justify-between h-[150px]">
            <p className="text-xs text-[#667185]">Total investments</p>
            <h2 className="text-xl text-[#667185] font-bold mt-auto">
              ₦3,000,000.00
            </h2>
            <a
              href="#"
              className="flex items-center text-yellow-300 hover:underline text-sm mt-2"
            ></a>
          </div>
        </div>
        <br></br>
        <div className="mb-4 flex gap-2">
          <SearchBar
            placeholder="search based on id"
            onChange={handleSearchChange}
          />
          <button
            onClick={() => handleFilterChange("All")}
            className={`px-4 py-2 rounded ${
              filter === "All"
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-orange-600`}
          >
            Total Assets
          </button>
          <button
            onClick={() => handleFilterChange("Registration")}
            className={`px-4 py-2 rounded ${
              filter === "Registration"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-600`}
          >
           Active Assets
          </button>

          <button
            onClick={() => handleFilterChange("Properties")}
            className={`px-4 py-2 rounded ${
              filter === "Properties"
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-yellow-600`}
          >
            Completed
          </button>
          <button
            onClick={() => handleFilterChange("Filter")}
            className={`flex items-center px-4 py-2 rounded ${
              filter === ""
                ? "bg-yellow-500 text-white"
                : "bg-white text-gray-700"
            } hover:bg-gray-300`}
          >
            <span className="mr-2">Filter</span>
            <VscFilter />
          </button>
        </div>
        <Table headers={headers} rows={rows} />
      </div>
    </>
  );
}
