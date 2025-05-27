import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Aluguel, Prisma } from '@prisma/client';
import { CreateAluguelDto } from './dtos/create-aluguel.dto';
import { UpdateAluguelDto } from './dtos/update-aluguel.dto';

@Injectable()
export class AluguelService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateAluguelDto): Promise<Aluguel> {
    return this.prisma.aluguel.create({ data });
  }

  findAll(): Promise<Aluguel[]> {
    return this.prisma.aluguel.findMany({
      include: { carro: true, usuario: true, pagamento: true },
    });
  }

  findOne(id: string): Promise<Aluguel | null> {
    return this.prisma.aluguel.findUnique({
      where: { id },
      include: { carro: true, usuario: true, pagamento: true },
    });
  }

  update(id: string, dto: UpdateAluguelDto): Promise<Aluguel> {
    return this.prisma.aluguel.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: string): Promise<Aluguel> {
    return this.prisma.aluguel.delete({
      where: { id },
    });
  }
}
