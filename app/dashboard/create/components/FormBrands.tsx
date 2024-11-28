"use client";
import { type ChangeEvent, useState } from 'react';
import FieldInput from "@/components/create/FieldInput";
import TextArea from "@/components/create/TextArea";
import CheckBox from "@/components/create/CheckBox";
import ImageUpload from '@/components/create/ImageUpload';
import type { BrandCategoryI } from '@/types/brandCategory';
import MultiSelect from '@/components/create/MultiSelect';

interface FormInputsProps {
  onFormDataChange: (data: Partial<BrandCategoryI>) => void;
  onSubmit?: (data: FormData) => void;
  categoryExist: boolean;
  setCategoryExist: (value: boolean) => void;
  handleCheckboxChange: () => void;
  formData: BrandCategoryI
}

interface FormData {
  name: string;
  email: string;
  password: string;
  rememberMe: boolean;
  role: string;
  image: File | null;
}

export function FormBrands({ onSubmit, onFormDataChange, categoryExist, setCategoryExist, handleCheckboxChange, formData }: FormInputsProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onFormDataChange({ [name]: value });
  };
  const handleMultiSelectChange = (selectedValues: string[]) => {
    onFormDataChange({ existingCategoryId: selectedValues });
  };
  const handleImageChange = (file: File | null) => {
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
    onFormDataChange({ logoImg: file });
  };

  const roleOptions = [
    { value: 'user', label: 'User' },
    { value: 'admin', label: 'Admin' },
  ];

  return (
    <div className='w-full'>
      <h1 className="text-2xl mb-4 font-bold">Marcas</h1>
      <div className="space-y-4">
        <ImageUpload
          name='logoImg'
          text='Subir Logo de marca'
          onImageChange={handleImageChange}
          imagePreview={imagePreview}
        />
        <FieldInput name="brandName" text='Nombre de la marca' placeholder='Nombre' handleChange={handleInputChange} />
        <FieldInput name="emailOficial" text='Email de contacto oficial' placeholder='contacto@oficial.com' handleChange={handleInputChange} />
        <TextArea name='description' text='Descripción de la marca' placeholder='Descripción' handleChange={handleInputChange} />
        
        {/* Contenedor flexible para inputs de Instagram y Website */}
        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
          <FieldInput
            name="instagramUrl"
            text='Instagram oficial'
            DivExtraClassName='w-full'
            placeholder='https://www.instagram.com'
            handleChange={handleInputChange}
          />
          <FieldInput
            name="websiteUrl"
            text='Website oficial'
            DivExtraClassName='w-full'
            placeholder='https://www.website.com'
            handleChange={handleInputChange}
          />
        </div>

        <CheckBox isChecked={categoryExist} handleCheckboxChange={handleCheckboxChange} text='Crear una categoria' />
        <MultiSelect disabled={categoryExist}  value={formData.existingCategoryId || []} handleChange={handleMultiSelectChange} name='existingCategoryId' options={roleOptions} label={'Categorías existente'} />
      </div>
    </div>
  );
}