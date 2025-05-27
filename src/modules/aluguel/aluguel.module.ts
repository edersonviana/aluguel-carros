import { Module } from '@nestjs/common';
import { AluguelService } from './aluguel.service';
import { AluguelController } from './aluguel.controller';

@Module({
  providers: [AluguelService],
  controllers: [AluguelController]
})
export class AluguelModule {}
