import { Injectable } from '@nestjs/common';
import { IPagamentoRepository } from './pagamento.repository.interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { Pagamento } from '@prisma/client';
import { UpdatePagamentoDto } from '../dtos/update-pagamento.dto';

@Injectable()
export class PagamentoRepository implements IPagamentoRepository {
  constructor(private readonly prisma: PrismaService) {}

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
}
