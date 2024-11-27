export interface Brand {
  id: string;
  name: string;
  logo: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateBrandDTO {
  name: string;
  logo: string;
}