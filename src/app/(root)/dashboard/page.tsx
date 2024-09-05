"use client";
import HeaderWrapper from "@/components/sidebar/Header";
import AreaChart from "@/components/chart";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";


const Dashboard = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <HeaderWrapper
        onClick={() => setOpen(!open)}
        title={"Dashboard"}
        isTime={true}
      />

      <section>
        <div className="min-h-screen mx-16 ms-64 p-8 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
            <div className="bg-primary text-white p-4 rounded-md">
              <p className="text-xs">Total number of referrals</p>
              <h2 className="text-xl font-bold">500</h2>
              <a
                href="/referrals"
                className="flex items-center mt-2 text-yellow-300 hover:underline text-sm"
              >
                View Referrals <FaArrowRight className="ml-2" />
              </a>
            </div>

            <div className="bg-green-700 text-white p-4 rounded-md">
              <p className="text-xs">Total Transactions</p>
              <h2 className="text-xl font-bold">₦543,654,080.00</h2>
              <a
                href="/wallet"
                className="flex items-center mt-2 text-yellow-300 hover:underline text-sm"
              >
                View Transactions <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Top Referrals</h3>
              <div className="flex space-x-2 mt-2 md:mt-0">
                <button className="px-3 py-1 text-sm bg-gray-100 rounded-md hover:bg-gray-200">
                  12 months
                </button>
                <button className="px-3 py-1 text-sm bg-gray-100 rounded-md hover:bg-gray-200">
                  30 days
                </button>
                <button className="px-3 py-1 text-sm bg-gray-100 rounded-md hover:bg-gray-200">
                  7 days
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div>
                <AreaChart/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
