"use client";
import { referralsData } from "../data";
import { useState } from "react";
import HeaderWrapper from "@/components/sidebar/Header";
import Table from "@/components/sidebar/tableSection"; 

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
  const { id } = params;

  // Fetch the referral based on the ID
  const referral = referralsData.find((ref) => ref.id === id);

  if (!referral) {
    return <div>Referral not found</div>;
  }

  const [open, setOpen] = useState(false);

  // Define headers for the table
  const headers = [
    "Event",
    "Commission Type",
    "Amount Earned",
    "Event Date",
    "Actions",
  ];

  // Filter the referrals data based on the current referral's type or other criteria if needed
  const filteredData = referralsData.filter(
    (ref) => ref.name === referral.name
  );

  // Create rows for the table
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
      <HeaderWrapper
        onClick={() => setOpen(!open)}
        title={referral.name}
        isTime={true}
      />
      <div className="container mx-64 px-4">
        <Table headers={headers} rows={rows} />
      </div>
    </>
  );
}
