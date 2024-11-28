import { useState, ChangeEvent } from 'react';

interface TextAreaProps {
    text?: string;
    placeholder?: string;
    name?: string;
    value?: string;
    handleChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    handleBlur?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    errors?: string;
    InputExtraClassName?: string;
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
    const [isFocused, setIsFocused] = useState(false); 

    const handleFocus = () => setIsFocused(true);
    const handleBlurWrapper = (e: ChangeEvent<HTMLTextAreaElement>) => {
        handleBlur && handleBlur(e);
        if (value) {
            setIsFocused(true); 
        } else {
            setIsFocused(false); 
        }
    };

    return (
        <div className="relative mt-1 min-h-[48px] w-full">
            <label
                className={`text-white text-sm font-medium `}
                htmlFor={name}
            >
                {text}
            </label>
            <textarea
                className={`${InputExtraClassName ? InputExtraClassName : ''} mt-1 border-gray scrollycustom peer block min-h-[48px] w-full resize-none appearance-none rounded border-[1px] px-2.5 pb-2.5 pt-4 font-inter text-sm text-white focus:outline-none focus:ring-0`}
                id={name}
                name={name}
                placeholder=""
                rows={6}
                value={value}
                onFocus={handleFocus}
                onBlur={handleBlurWrapper}
                onChange={handleChange}
            />
            <label
                className={`absolute left-4 top-10 text-gray-400 origin-[0] transition-all duration-200 ${isFocused || value ? 'hidden' : ''}`}
                htmlFor={name}
            >
                {placeholder}
            </label>
            <p className="ml-1 mt-1 h-3 text-xs italic text-red-500">{errors}</p>
        </div>
    );
}

export default TextArea;