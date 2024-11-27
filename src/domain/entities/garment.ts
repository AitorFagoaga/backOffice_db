export interface Garment {
  id: string;
  name: string;
  description: string;
  image: string;
  brandId: string;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateGarmentDTO {
  name: string;
  description: string;
  image: string;
  brandId: string;
  categoryId: string;
}