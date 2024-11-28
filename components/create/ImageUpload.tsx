import React, { useState } from 'react';
import { Button } from "@/components/ui/button"; // Asegúrate de importar el botón correcto
import { Trash2 } from "lucide-react"; // Asegúrate de importar el ícono correcto

interface ImageUploadProps {
  onImageChange: (file: File | null) => void; 
  imagePreview?: string | null; 
  text?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageChange, imagePreview, text }) => {
  const [localImagePreview, setLocalImagePreview] = useState<string | null>(imagePreview);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setLocalImagePreview(URL.createObjectURL(file));
      onImageChange(file);
    } else {
      setLocalImagePreview(null);
      onImageChange(null);
    }
  };

  const handleImageRemove = () => {
    setLocalImagePreview(null);
    onImageChange(null);
  };

  return (
    <div className="flex">
      <div>
        <label className="flex flex-col text-sm text-white">{text}</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 w-fit p-2 border  rounded-md"
        />
      </div>

      {localImagePreview && (
        <div className="flex ml-4 mt-6 space-y-2">
          <div className="w-fit rounded-lg shadow-md overflow-hidden">
            <img
              src={localImagePreview}
              alt="Vista previa"
              className="w-fit h-40 object-cover"
            />
          </div>
          <Button
            type="button"
            onClick={handleImageRemove}
            className="w-fit ml-4 rounded-md bg-red-600 py-1 px-2 text-sm font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <Trash2 />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;