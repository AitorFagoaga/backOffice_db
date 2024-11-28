import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button"; 
import { Trash2 } from "lucide-react"; 

interface ImageUploadProps {
  onImageChange: (file: File | null) => void; 
  imagePreview?: string | null; 
  text?: string;
  name?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageChange, imagePreview, text, name }) => {
  const [localImagePreview, setLocalImagePreview] = useState<string | null>(imagePreview ?? null);
  const fileInputRef = useRef<HTMLInputElement>(null); 

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setLocalImagePreview(URL.createObjectURL(file));
      onImageChange(file);
    }
  };

  const handleImageRemove = () => {
    setLocalImagePreview(null);
    onImageChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
      <div className="flex-1">
        <label className="flex flex-col text-sm text-white">{text}</label>
        <input
          ref={fileInputRef} 
          name={name}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 w-full p-2 border rounded-md"
        />
      </div>

      {localImagePreview && (
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-fit rounded-lg shadow-md overflow-hidden">
            <img
              src={localImagePreview}
              alt="Vista previa"
              className="w-full h-40 object-cover"
            />
          </div>
          <Button
            type="button"
            onClick={handleImageRemove}
            className="rounded-md bg-red-600 py-1 px-2 text-sm font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <Trash2 />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
