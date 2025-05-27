import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePagamentoDto } from './dtos/create-pagamento.dto';
import { UpdatePagamentoDto } from './dtos/update-pagamento.dto';
import { Pagamento } from '@prisma/client';

@Injectable()
export class PagamentoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreatePagamentoDto): Promise<Pagamento> {
    return this.prisma.pagamento.create({
      data: dto,
    });
  }

  async findAll(): Promise<Pagamento[]> {
    return this.prisma.pagamento.findMany({
      include: { aluguel: true },
    });
  }

  async findOne(id: string): Promise<Pagamento | null> {
    return this.prisma.pagamento.findUnique({
      where: { id },
      include: { aluguel: true },
    });
  }

  async update(id: string, dto: UpdatePagamentoDto): Promise<Pagamento> {
    return this.prisma.pagamento.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string): Promise<Pagamento> {
    return this.prisma.pagamento.delete({
      where: { id },
    });
  }
}

