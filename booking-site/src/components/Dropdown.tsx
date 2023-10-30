import React, { useState, useRef } from "react";

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div
      className={`relative inline-block ${isOpen ? "z-10" : ""}`}
      ref={dropdownRef}
    >
      <div
        className="bg-white border border-gray-300 rounded p-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        {value || "Select an option"}
      </div>
      {isOpen && (
        <ul className="absolute z-20 mt-2 p-2 bg-white border border-gray-300 rounded shadow">
          {options.map((option, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => selectOption(option)}
            >
              <p className="text-ellipsis">{option}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
