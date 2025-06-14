import { Carro } from '@prisma/client';
import { CreateCarroDto } from '../dtos/create-carro.dto';
import { UpdateCarroDto } from '../dtos/update-carro.dto';

export interface ICarroRepository {
  create(data: CreateCarroDto): Promise<Carro>;
  findAll(): Promise<Carro[]>;
  findOne(id: string): Promise<Carro | null>;
  update(id: string, data: UpdateCarroDto): Promise<Carro>;
  remove(id: string): Promise<Carro>;
}
