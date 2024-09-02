import React, { FC } from "react";

type SearchBarProps = {
  placeholder: string;
  onChange: (value: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({ placeholder, onChange }) => {
  return (
    <div className="relative flex items-center w-full max-w-md">

      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span className="absolute left-3 text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.9 14.32a8 8 0 111.414-1.414l4.305 4.305a1 1 0 01-1.414 1.414l-4.305-4.305zM8 14a6 6 0 100-12 6 6 0 000 12z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
};

export default SearchBar;
