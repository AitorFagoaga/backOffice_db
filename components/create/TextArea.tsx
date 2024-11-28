import type { ChangeEvent } from 'react'

interface TextAreaProps {
    text?: string
  type?: string
  placeholder?: string
  name?: string
  value?: string
  handleChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleBlur?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  errors?: string
  InputExtraClassName?: string
}
function TextArea({
    text,
  placeholder,
  name,
  value,
  handleChange,
  handleBlur,
  errors,
  InputExtraClassName,
}: TextAreaProps) {
  return (
    <div className="relative mt-1 min-h-[48px] w-full">
        <label
        className="text-white text-sm font-medium"
        htmlFor={name}
      >
        {text}
      </label>
      <textarea
        className={`${InputExtraClassName ? InputExtraClassName : ''} mt-1 border-gray scrollycustom peer block min-h-[48px] w-full resize-none appearance-none rounded border-[1px] px-2.5 pb-2.5 pt-4 font-inter text-sm text-white  focus:outline-none focus:ring-0`}
        id={name}
        name={name}
        placeholder=""
        rows={6}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <label
        className="absolute left-4 top-10 text-gray-400 origin-[0] "
        htmlFor={name}
      >
        {placeholder}
      </label>
      <p className="ml-1 mt-1 h-3 text-xs italic text-red-500">{errors}</p>
    </div>
  )
}

export default TextArea