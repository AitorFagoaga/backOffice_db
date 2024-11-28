import type { ChangeEvent } from 'react'
import { PencilIcon, TrashIcon } from "lucide-react";

interface InputProps {
  text?: string
  type?: string
  placeholder?: string
  name?: string
  value?: string | number
  handleChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleBlur?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  errors?: string
  extraClassName?: string
  DivExtraClassName?: string
  InputExtraClassName?: string
  labelExtraClassName?: string
  width?: string
  margin?: string
}

function FieldInput({
  text,
  type,
  placeholder,
  name,
  value,
  handleChange,
  handleBlur,
  errors,
  extraClassName,
  DivExtraClassName,
  InputExtraClassName,
  labelExtraClassName,
  width,
  margin,
}: InputProps) {
  return (
    <div className={`${DivExtraClassName} `}>
      <label htmlFor="name" className="block text-sm font-medium text-white">
        {text}
      </label>
      <input
        type="text"
        id={text}
        name={text}
        value={name}
        onChange={handleChange}
        className={`mt-1 p-2 block w-full rounded-md border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
        placeholder={placeholder}
        required
      />
  </div>
  )
}

export default FieldInput;