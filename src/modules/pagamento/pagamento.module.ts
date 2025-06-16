import { Module } from '@nestjs/common';
import { PagamentoService } from './pagamento.service';
import { PagamentoController } from './pagamento.controller';
import { PagamentoRepository } from './repositories/pagamento.repository';
import { IPagamentoRepository } from './repositories/pagamento.repository.interface';

@Module({
  controllers: [PagamentoController],
  providers: [
    PagamentoService,
    {
      provide: IPagamentoRepository,
      useClass: PagamentoRepository,
    },
  ],
})
export class PagamentoModule {}
