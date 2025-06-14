import { Pagamento } from '@prisma/client';
import { UpdatePagamentoDto } from '../dtos/update-pagamento.dto';

export abstract class IPagamentoRepository {
  abstract findAll(): Promise<Pagamento[]>;
  abstract findOne(id: string): Promise<Pagamento | null>;
  abstract update(id: string, dto: UpdatePagamentoDto): Promise<Pagamento>;
}
