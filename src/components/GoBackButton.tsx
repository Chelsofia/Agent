import { IoArrowBack } from "react-icons/io5"; 
const GoBackButton = () => {

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={handleGoBack}
      className="flex items-center space-x-4 p-2"
    >
      <div className="flex items-center justify-center w-8 h-8 bg-white text-black rounded-lg shadow-md border border-gray-300">
        <IoArrowBack size={16} />
      </div>
      <div className="flex items-center space-x-4">
        {" "}
        
        <span className="text-gray-600">Go Back</span>
        <span className="text-orange-500 font-semibold">Referrals</span>
      </div>
    </button>
  );
};

export default GoBackButton;
