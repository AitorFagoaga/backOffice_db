"use client";
import { type ChangeEvent, useState } from 'react';
import FieldInput from "@/components/create/FieldInput";
import TextArea from "@/components/create/TextArea";
import ImageUpload from '@/components/create/ImageUpload';

interface FormInputsProps {
    onFormDataChange: (data: Partial<FormData>) => void;
}
  
interface FormData {
    name: string;
    email: string;
    password: string;
    rememberMe: boolean;
    role: string;
    image?: File | null; 
  }

export function FormCategory({ onFormDataChange }: FormInputsProps) {
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageChange = (file: File | null) => {
        if (file) {
            setImagePreview(URL.createObjectURL(file)); // Crear la vista previa de la imagen
        } else {
            setImagePreview(null); // Limpiar la vista previa si no hay archivo
        }
        onFormDataChange({ image: file });
    };

    const valuesChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, files } = e.target;

        if (type === "file" && files) {
            const file = files[0];
            handleImageChange(file); // Llama a la función para manejar la imagen
        } else {
            onFormDataChange({ [name]: value } as Partial<FormData>);
        }
    };

    return (
        <div className='w-full ml-8'>
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
                    handleChange={valuesChange} 
                />
                <TextArea 
                    name="description" 
                    text='Descripción de la categoría' 
                    placeholder='Descripción' 
                    handleChange={valuesChange} 
                />
            </div>
        </div>
    );
}