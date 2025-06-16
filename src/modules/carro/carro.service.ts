// src/carro/carro.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { CreateCarroDto } from './dtos/create-carro.dto';
import { UpdateCarroDto } from './dtos/update-carro.dto';
import { Carro } from '@prisma/client';
import { ICarroRepository } from './repositories/carro.repository.interface';

@Injectable()
export class CarroService {
  constructor(
    @Inject(ICarroRepository)
    private readonly carroRepository: ICarroRepository,
  ) { }


  create(data: CreateCarroDto): Promise<Carro> {
    return this.carroRepository.create(data);
  }

  findAll(): Promise<Carro[]> {
    return this.carroRepository.findAll();
  }

  findOne(id: string): Promise<Carro | null> {
    return this.carroRepository.findOne(id);
  }

  update(id: string, data: UpdateCarroDto): Promise<Carro> {
    return this.carroRepository.update(id, data);
  }

  remove(id: string): Promise<Carro> {
    return this.carroRepository.remove(id);
  }
}
