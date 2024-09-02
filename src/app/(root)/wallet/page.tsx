"use client";
import React, { useState } from "react";
import { Badge } from "@/components/badge";
import { VscFilter } from "react-icons/vsc";
import {Modal} from "@/components/modal"; 
import HeaderWrapper from "@/components/sidebar/Header";
import Table from "@/components/tableSection";
import WalletCard from "@/components/card";
import { walletData } from "./data";
import SearchBar from "@/components/searchBar";

type Transaction = {
  id: string;
  amount: string;
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
          {/* ... */}
        </div>

        <Table
          headers={["Transaction id", "Amount", "Status", "Actions"]}
          rows={rows}
        />

        <Modal 
          open={isModalOpen}
          setOpen={setIsModalOpen}
          title ="Transaction Details"
        >
          {selectedTransaction && (
            <div className="p-4">
              <h1 className="xl">{selectedTransaction.amount}</h1>

              <p className="text-green-500">credit</p>
              <p>
                <strong>Transaction ID:</strong> {selectedTransaction.id}
              </p>
              <p>
                <strong>Amount:</strong> ${selectedTransaction.amount}
              </p>
              <p>
                <strong>Status:</strong> {selectedTransaction.status}
              </p>
            </div>
          )}
        </Modal>
      </div>
    </>
  );
}
