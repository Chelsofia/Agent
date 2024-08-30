"use client";
import {Badge} from "./badge";
import { useState } from "react";
import HeaderWrapper from "@/components/sidebar/Header";
const transactions = [
  {
    id: "Trnx123456789012",
    amount: "₦300,000",
    status: "Successful",
  },
  {
    id: "Trnx123456789013",
    amount: "₦300,000",
    status: "Failed",
  },
  {
    id: "Trnx123456789014",
    amount: "₦300,000",
    status: "Pending",
  },
  // ... more transactions
];

export default function WalletPage() {
    const [open, setOpen] = useState(false);
  return (
    <>
      <HeaderWrapper
        onClick={() => setOpen(!open)}
        title={"Wallet"}
        isTime={true}
      />

      <div className="p-6 ms-64 bg-white rounded-lg shadow-md">
        {/* Table headers */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          {/* Table rows */}
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {transaction.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {transaction.amount}
                </td>
                {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                
              </td> */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <a href="#" className="text-orange-600 hover:underline">
                    View Receipt
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
