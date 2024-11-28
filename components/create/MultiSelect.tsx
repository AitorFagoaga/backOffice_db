import React from "react";

interface MultiSelectProps {
  name: string;
  label?: string;
  options: { value: string; label: string }[];
  disabled?: boolean;
  value: string[];
  handleChange: (selectedValues: string[]) => void; 
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  name,
  label,
  options,
  disabled,
  value,
  handleChange,
}) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (selectedValue && !value.includes(selectedValue)) {
      handleChange([...value, selectedValue]);
    }
  };

  const handleRemoveChip = (chipValue: string) => {
    const updatedValues = value.filter((v) => v !== chipValue);
    handleChange(updatedValues);
  };

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className={`block text-sm font-medium text-white ${
            disabled ? "opacity-50" : ""
          }`}
        >
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        onChange={handleSelectChange}
        value="" 
        className={`${
          disabled ? "cursor-not-allowed opacity-50" : ""
        } mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm md:text-base min-h-[40px]`}
        disabled={disabled}
      >
        <option  value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option  key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Render selected values as chips */}
      <div
        className="mt-2 flex flex-wrap gap-2"
      >
        {value.map((chip) => (
          <div
            key={chip}
            className="flex items-center rounded-full bg-indigo-500 text-white px-3 py-1 text-sm shadow"
          >
            <span>{options.find((option) => option.value === chip)?.label}</span>
            <button
              type="button"
              className="ml-2 text-white hover:text-gray-300"
              onClick={() => handleRemoveChip(chip)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelect;
