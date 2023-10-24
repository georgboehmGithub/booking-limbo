import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  onSearch: (searchTerm: string) => void;
};

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex align-center justify-center px-2">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-sm placeholder-gray-600 px-2 bg-gray-200 hover:bg-white focus:bg-white focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
