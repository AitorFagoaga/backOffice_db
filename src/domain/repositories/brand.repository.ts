import { Brand, CreateBrandDTO } from '../entities/brand';

export interface BrandRepository {
  create(data: CreateBrandDTO): Promise<Brand>;
  findAll(): Promise<Brand[]>;
  findById(id: string): Promise<Brand | null>;
  update(id: string, data: Partial<CreateBrandDTO>): Promise<Brand>;
  delete(id: string): Promise<void>;
}