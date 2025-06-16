// pagamento/pagamento.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { IPagamentoRepository } from './repositories/pagamento.repository.interface';
import { UpdatePagamentoDto } from './dtos/update-pagamento.dto';
import { Pagamento } from '@prisma/client';

@Injectable()
export class PagamentoService {
  constructor(
    @Inject(IPagamentoRepository)
    private readonly pagamentoRepository: IPagamentoRepository,
  ) {}

  async findAll(): Promise<Pagamento[]> {
    return this.pagamentoRepository.findAll();
  }

  async findOne(id: string): Promise<Pagamento | null> {
    return this.pagamentoRepository.findOne(id);
  }

  async update(id: string, dto: UpdatePagamentoDto): Promise<Pagamento> {
    return this.pagamentoRepository.update(id, dto);
  }
}
