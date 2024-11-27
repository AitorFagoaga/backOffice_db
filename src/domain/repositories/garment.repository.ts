import { Garment, CreateGarmentDTO } from '../entities/garment';

export interface GarmentRepository {
  create(data: CreateGarmentDTO): Promise<Garment>;
  findAll(): Promise<Garment[]>;
  findById(id: string): Promise<Garment | null>;
  update(id: string, data: Partial<CreateGarmentDTO>): Promise<Garment>;
  delete(id: string): Promise<void>;
}