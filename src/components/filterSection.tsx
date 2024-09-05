import React from "react";

interface FilterButtonProps {
  label: string;
  count: number;
  color: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, count, color }) => {
  return (
    <button
      className={`bg-${color}-100 text-${color}-600 font-semibold  px-4 rounded`}
    >
      {label} <span className="ml-2">({count})</span>
    </button>
  );
};

const FilterSection: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-white ">
      <div className="flex space-x-4">
        <FilterButton label="All Referrals" count={60} color="orange" />
        <FilterButton label="Registration" count={45} color="blue" />
        <FilterButton label="Investment" count={15} color="teal" />
        <FilterButton label="Purchase" count={15} color="-[#FFECE5]" />
      </div>
      <button className="bg-white text-gray-600  rounded-md">
        <svg
          className="w-4 h-4 inline-block mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M10 18a8 8 0 116-6h5l3 3-3 3h-5a8 8 0 01-6 3zm0-2c4.418 0 8-3.582 8-8S14.418 0 10 0 2 3.582 2 8s3.582 8 8 8z" />
        </svg>
        Filter
      </button>
    </div>
  );
};

export default FilterSection;
