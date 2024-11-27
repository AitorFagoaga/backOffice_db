import { Category, CreateCategoryDTO } from '../entities/category';

export interface CategoryRepository {
  create(data: CreateCategoryDTO): Promise<Category>;
  findAll(): Promise<Category[]>;
  findById(id: string): Promise<Category | null>;
  update(id: string, data: Partial<CreateCategoryDTO>): Promise<Category>;
  delete(id: string): Promise<void>;
}