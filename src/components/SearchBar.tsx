import React, { useState } from "react";

type Props = {
  onSearch: (searchTerm: string) => void;
};

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    // Search container
    <div className="flex w-[280px] h-[72px] px-[16px] py-[12px]">
      {/* Search bar */}
      <div className="flex rounded-[12px] w-full h-full">
        {/* Search icon container */}
        <div className="flex items-center bg-[#F2E8E8] pl-[16px] rounded-tl-[12px] rounded-bl-[12px] h-full">
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.5306 18.4694L14.8366 13.7762C17.6629 10.383 17.3204 5.36693 14.0591 2.38935C10.7978 -0.588237 5.77134 -0.474001 2.64867 2.64867C-0.474001 5.77134 -0.588237 10.7978 2.38935 14.0591C5.36693 17.3204 10.383 17.6629 13.7762 14.8366L18.4694 19.5306C18.7624 19.8237 19.2376 19.8237 19.5306 19.5306C19.8237 19.2376 19.8237 18.7624 19.5306 18.4694ZM1.75 8.5C1.75 4.77208 4.77208 1.75 8.5 1.75C12.2279 1.75 15.25 4.77208 15.25 8.5C15.25 12.2279 12.2279 15.25 8.5 15.25C4.77379 15.2459 1.75413 12.2262 1.75 8.5Z"
              fill="#964F52"
            />
          </svg>
        </div>

        {/* Search input container */}
        <div className="flex items-center bg-[#F2E8E8] w-full h-full text-[#964F52] rounded-tr-[12px] rounded-br-[12px] pt-[8px] pr-[16px] pb-[8px] pl-[8px]">
          {/* Search input */}
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-[16px] text-[#964F52] placeholder:text-[#964F52]"
              style={{
                lineHeight: "24px",
                fontStyle: "normal",
                letterSpacing: "0px",
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
