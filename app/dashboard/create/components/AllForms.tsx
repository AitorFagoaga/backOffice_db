"use client";
import { type ChangeEvent, useEffect, useState } from 'react'

import { FormBrands } from './FormBrands';
import { FormCategory } from './FormCategory';
import type {BrandCategoryI} from '@/types/brandCategory';
  
export function AllForms() {
  const [formData, setFormData] = useState<BrandCategoryI>({
    brandName: "",
    emailOficial:"",
    description:"",
    logoImg: null, 
    websiteUrl: "",
    instagramUrl: "",
    country:"Argentina",
    existingCategoryId: [],
    newCategoryName: "",
    newCategoryImageUrl: null,
  });

  const [ categoryExist, setCategoryExist ] = useState(false);

  const handleFormDataChange = (newData: Partial<BrandCategoryI>) => {
    setFormData((prevData) => ({
        ...prevData,
        ...newData,
    }));
};

const handleCheckboxChange = () => {
  setCategoryExist(!categoryExist);
}


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  console.log('formData', formData);
  return (
    <div className="rounded-md border p-6">
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col md:flex-row'>
          
          <FormBrands 
          formData={formData}
            categoryExist={categoryExist}
            setCategoryExist={setCategoryExist} 
            handleCheckboxChange={handleCheckboxChange}
            onFormDataChange={handleFormDataChange}/>
          <FormCategory 
           onFormDataChange={handleFormDataChange}
           categoryExist={categoryExist}
           />
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