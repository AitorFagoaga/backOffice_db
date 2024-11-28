"use client";
import { type ChangeEvent, useState } from 'react';
import FieldInput from "@/components/create/FieldInput";
import TextArea from "@/components/create/TextArea";
import ImageUpload from '@/components/create/ImageUpload';
import type { BrandCategoryI } from '@/types/brandCategory';

interface FormInputsProps {
    onFormDataChange: (data: Partial<BrandCategoryI>) => void;
    categoryExist: boolean;
}

interface FormData {
    name: string;
    email: string;
    password: string;
    rememberMe: boolean;
    role: string;
    image?: File | null; 
}

export function FormCategory({ onFormDataChange, categoryExist }: FormInputsProps) {
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageChange = (file: File | null) => {
        if (file) {
          setImagePreview(URL.createObjectURL(file));
        } else {
          setImagePreview(null);
        }
        onFormDataChange({ logoImg: file });
      };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        onFormDataChange({ [name]: value });
      };

    return (
        <div className={`w-full p-4 md:p-8 ${!categoryExist ? 'opacity-50 pointer-events-none' : ''}`}> {/* Padding responsivo */}
            <h1 className="text-2xl mb-4 font-bold">Categorías</h1>
            <div className="space-y-4">
                <ImageUpload
                    onImageChange={handleImageChange}
                    imagePreview={imagePreview}
                />
                <FieldInput 
                    name="name" 
                    text='Nombre de la categoría' 
                    placeholder='Nombre' 
                    handleChange={handleInputChange} 
                />
                <TextArea 
                    name="description" 
                    text='Descripción de la categoría' 
                    placeholder='Descripción' 
                    handleChange={handleInputChange} 
                />
            </div>
        </div>
    );
}