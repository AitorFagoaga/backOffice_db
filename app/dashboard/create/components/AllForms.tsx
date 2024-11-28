"use client";
import { type ChangeEvent, useEffect, useState } from 'react'

import { FormBrands } from './FormBrands';
import { FormCategory } from './FormCategory';

interface FormData {
  brandName: string;
  email: string;
  websiteUrl: string;
  instagramUrl: string;
  country: string;
  image?: File | null; 
}
  
  
export function AllForms() {
  const [formData, setFormData] = useState<FormData>({
    brandName: "",
    email:"",
    websiteUrl: "",
    instagramUrl: "",
    country:"Argentina",
    image: null,
  });

  // Maneja la actualización de formData desde el hijo
  const handleFormDataChange = (newData: Partial<FormData>) => {
    setFormData((prevData) => ({
        ...prevData,
        ...newData,
    }));
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="rounded-md border p-6">
      <form onSubmit={handleSubmit}>
        <div className='flex '>
          
          <FormBrands/>
          <FormCategory onFormDataChange={handleFormDataChange}/>
        </div>
        <div className="flex justify-end mt-4"> 
          <button
            type="submit"
            className="w-fit mt-2 rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Crear
          </button>
        </div>
      </form>
     
    </div>
  );
}