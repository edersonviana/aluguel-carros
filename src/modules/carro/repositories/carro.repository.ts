import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ICarroRepository } from './carro.repository.interface';
import { Carro, CarroStatus, Prisma } from '@prisma/client';
import { CreateCarroDto } from '../dtos/create-carro.dto';
import { UpdateCarroDto } from '../dtos/update-carro.dto';

@Injectable()
export class CarroRepository implements ICarroRepository {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: CreateCarroDto): Promise<Carro> {
    return this.prisma.carro.create({
      data: {
        modelo: data.modelo,
        marca: data.marca,
        placa: data.placa,
        ano: data.ano,
        imagem: data.imagem,
        precoPorDia: new Prisma.Decimal(data.precoPorDia),
        status: data.status ?? CarroStatus.DISPONIVEL,
      },
    });
  }

  findAll(): Promise<Carro[]> {
    return this.prisma.carro.findMany();
  }

  findOne(id: string): Promise<Carro | null> {
    return this.prisma.carro.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateCarroDto): Promise<Carro> {
    return this.prisma.carro.update({
      where: { id },
      data,
    });
  }

  remove(id: string): Promise<Carro> {
    return this.prisma.carro.delete({ where: { id } });
  }

  async findAvailable(): Promise<Carro[]> {
    return this.prisma.carro.findMany({
      where: {
        status: CarroStatus.DISPONIVEL
      }
    });
  }
}
