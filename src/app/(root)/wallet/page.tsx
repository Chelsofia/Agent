"use client";
import React, { useState } from "react";
import { Badge } from "@/components/badge";
import { VscFilter } from "react-icons/vsc";
import { Modal } from "@/components/modal";
import HeaderWrapper from "@/components/sidebar/Header";
import Table from "@/components/tableSection";
import WalletCard from "@/components/card";
import { walletData } from "./data";
import SearchBar from "@/components/searchBar";

type Transaction = {
  id: string;
  amount: string;
  account_no: string;
  account_name: string;
  bank_name: string;
  reference_no: string;
  date: string;
  status: string;
  action?: string;
};

export default function WalletPage() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value.toLowerCase());
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const mapStatusToBadgeStatus = (status: string) => {
    switch (status.toLowerCase()) {
      case "successful":
        return "success";
      case "failed":
        return "failed";
      case "pending":
        return "pending";
      default:
        return undefined;
    }
  };

  const filteredData = walletData
    .filter(
      (item) =>
        filter === "All" || item.status.toLowerCase() === filter.toLowerCase()
    )
    .filter((item) => item.id.toLowerCase().includes(searchQuery));

  const rows = filteredData.map((item, index) => [
    item.id,
    item.amount,
    <Badge key={index} status={mapStatusToBadgeStatus(item.status)}>
      {item.status}
    </Badge>,
    <button
      key={index}
      className="text-secondary hover:underline"
      onClick={() => {
        setSelectedTransaction(item);
        setIsModalOpen(true);
      }}
    >
      View Receipt
    </button>,
  ]);

  const getCountForFilter = (filterValue: string) => {
    return walletData.filter(
      (item) =>
        (filterValue === "All" ||
          item.status.toLowerCase() === filterValue.toLowerCase()) &&
        item.id.toLowerCase().includes(searchQuery)
    ).length;
  };

  return (
    <>
      <HeaderWrapper
        onClick={() => setOpen(!open)}
        title={"Wallet"}
        isTime={true}
      />

      <div className="p-6 ms-64 bg-white rounded-lg shadow-md">
        <WalletCard />
        <br />
        <div className="mb-4 flex gap-2">
          <SearchBar
            placeholder="Search transactions by transaction ID"
            onChange={handleSearchChange}
          />
          {/* Filter buttons */}
          <button
            onClick={() => handleFilterChange("All")}
            className={`px-4 py-2 rounded ${
              filter === "All"
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-orange-600`}
          >
            Total Transactions
          </button>
          <button
            onClick={() => handleFilterChange("Successful")}
            className={`px-4 py-2 rounded ${
              filter === "RSuccessful"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-600`}
          >
            Successful
          </button>

          <button
            onClick={() => handleFilterChange("Pending")}
            className={`px-4 py-2 rounded ${
              filter === "Pending"
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-yellow-600`}
          >
            Pending
          </button>
          <button
            onClick={() => handleFilterChange("Failed")}
            className={`px-4 py-2 rounded ${
              filter === "Failed"
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-yellow-600`}
          >
            Failed
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

        <Table
          headers={["Transaction id", "Amount", "Status", "Actions"]}
          rows={rows}
        />

        <Modal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          title="Transaction Details"
        >
          {selectedTransaction && (
            <div className="p-4">
              <div className="border-b border-gray-200 pb-4 mb-4">
                <h1 className="text-center text-2xl font-bold mb-2">
                  {selectedTransaction.amount}
                </h1>
                <p className="text-center text-green-500">credit</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <div className="font-semibold">Transaction ID:</div>
                  <div className="text-right flex-1">
                    {selectedTransaction.id}
                  </div>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <div className="font-semibold">Account Number:</div>
                  <div className="text-right flex-1">
                    {selectedTransaction.account_no}
                  </div>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <div className="font-semibold">Account Name:</div>
                  <div className="text-right flex-1">
                    {selectedTransaction.account_name}
                  </div>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <div className="font-semibold">Date and Time:</div>
                  <div className="text-right flex-1">
                    {selectedTransaction.date}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="font-semibold">Status:</div>
                  <div className="text-right flex-1 flex items-center justify-end">
                    <Badge
                      status={mapStatusToBadgeStatus(
                        selectedTransaction.status
                      )}
                    >
                      {selectedTransaction.status}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </>
  );
}
