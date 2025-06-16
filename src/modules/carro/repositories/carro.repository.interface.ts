import { Carro } from '@prisma/client';
import { CreateCarroDto } from '../dtos/create-carro.dto';
import { UpdateCarroDto } from '../dtos/update-carro.dto';

export abstract class ICarroRepository {
  abstract create(data: CreateCarroDto): Promise<Carro>;
  abstract findAll(): Promise<Carro[]>;
  abstract findOne(id: string): Promise<Carro | null>;
  abstract update(id: string, data: UpdateCarroDto): Promise<Carro>;
  abstract remove(id: string): Promise<Carro>;
}
