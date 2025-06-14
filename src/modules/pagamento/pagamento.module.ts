import { Module } from '@nestjs/common';
import { PagamentoService } from './pagamento.service';
import { PagamentoController } from './pagamento.controller';
import { PagamentoRepository } from './repositories/pagamento.repository';

@Module({
  controllers: [PagamentoController],
  providers: [
    PagamentoService,
    PagamentoRepository,
    {
      provide: 'IPagamentoRepository',
      useClass: PagamentoRepository,
    },
  ],
})
export class PagamentoModule {}
