export interface Category {
  id: string;
  name: string;
  image: string;
  parentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateCategoryDTO {
  name: string;
  image: string;
  parentId?: string;
}