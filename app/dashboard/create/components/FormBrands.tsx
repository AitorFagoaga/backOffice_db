"use client";
import { type ChangeEvent, useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PencilIcon, TrashIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import FieldInput from "@/components/create/FieldInput"
import TextArea from "@/components/create/TextArea"
import CheckBox from "@/components/create/CheckBox"
import Select  from '@/components/create/select';
import ImageUpload from '@/components/create/ImageUpload';

interface FormInputsProps {
    onSubmit?: (data: FormData) => void;
  }
  
  interface FormData {
    name: string;
    email: string;
    password: string;
    rememberMe: boolean;
    role: string;
    image: File | null;
  }
  interface ChangePasswordModalI {
    actualPassword: string
    newPassword: string
    repeatPassword: string
  }
  
export function FormBrands({onSubmit}:FormInputsProps) {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
        rememberMe: false,
        role: "user",
        image: null,
      });
      const [values, setValues] = useState<ChangePasswordModalI>({
        actualPassword: '',
        newPassword: '',
        repeatPassword: '',
      })
      const [imagePreview, setImagePreview] = useState<string | null>(null); 
    
    
      function valuesChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target
    
        setValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }))
      }
      const handleImageChange = (file: File | null) => {
        setFormData((prevData) => ({
          ...prevData,
          image: file,
        }));
      };
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
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
          text='Subir Logo de marca'
            onImageChange={handleImageChange} 
            imagePreview={formData.image ? URL.createObjectURL(formData.image) : null} 
            />
            <FieldInput name="" text='Nombre de la marca' placeholder='Nombre' handleChange={valuesChange} />
            <FieldInput name="" text='Email de contacto oficial' placeholder='contacto@oficial.com' handleChange={valuesChange} />
            <TextArea text='Descripcion de la marca' placeholder='Descripcion'/>
            <div className='flex'>
              <FieldInput name="" 
                text='Instagram oficial' 
                DivExtraClassName='mr-2 w-full' 
                placeholder='https://www.instagram.com' 
                handleChange={valuesChange} 
                />
              <FieldInput 
                name="" 
                text='Website oficial' 
                DivExtraClassName='w-full' 
                placeholder='https://www.website.com' 
                handleChange={valuesChange} 
                />
            </div>
            <CheckBox text='Tiene una categoria existente'/>
            

            
            <Select options={roleOptions} label={'Categoria'}/>
           
          </div>
        </div>
        
  );
}