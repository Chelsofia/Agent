import React, { useState } from "react";
import { useModal } from "@/components/modal"; 
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"; 

const WalletCard = () => {
  const { open, showModal, Modal } = useModal();
  const [isAmountVisible, setIsAmountVisible] = useState(true);

  const toggleVisibility = () => setIsAmountVisible(!isAmountVisible);

  return (
    <div className="bg-secondary p-6 rounded-md w-full flex flex-col justify-between h-[150px] relative pb-10">
      <div className="flex items-center">
        <p className="text-xs text-white">Total commissions</p>
        <button onClick={toggleVisibility} className="ml-2 text-white">
          {isAmountVisible ? (
            <EyeIcon className="w-5 h-5" />
          ) : (
            <EyeSlashIcon className="w-5 h-5" />
          )}
        </button>
      </div>
      {isAmountVisible && (
        <h2 className="text-2xl text-white font-bold mt-auto">
          ₦140,000,000.00
        </h2>
      )}
      <button
        onClick={() => showModal(true)}
        className="bg-primary text-white px-4 py-2 rounded-md absolute bottom-4 right-4 mb-10"
      >
        Withdraw Funds
      </button>

      <Modal scale="md" showCloseIcon={true} dismissOnclickOutside={true}>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Amount</label>
            <input
              type="text"
              placeholder="Enter amount"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Account Name</label>
            <input
              type="text"
              placeholder="Enter account name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
            />
          </div>

          <div className="mb-4 flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Account Number</label>
              <input
                type="text"
                placeholder="Enter account number"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Bank Name</label>
              <input
                type="text"
                placeholder="Enter bank name"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-primary w-full text-white px-4 py-2 rounded-md"
            >
              Withdraw Funds
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default WalletCard;
