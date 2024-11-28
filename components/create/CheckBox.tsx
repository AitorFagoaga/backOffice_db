import React, { useState, ChangeEvent } from 'react'

interface CheckBoxProps {
  text?: string
  handleCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
}
function Checkbox({ text, isChecked, handleCheckboxChange }: CheckBoxProps) {
  
  return (
    <div className="flex items-center">
      <input
        checked={isChecked}
        className="form-checkbox h-5 w-5 text-blue-400"
        type="checkbox"
        onChange={handleCheckboxChange}
      />
      <label className="ml-2  text-white" htmlFor="checkbox">
        {text}
      </label>
    </div>
  )
}

export default Checkbox