import { Module } from '@nestjs/common';
import { CarroService } from './carro.service';
import { CarroController } from './carro.controller';

@Module({
  providers: [CarroService],
  controllers: [CarroController],
})
export class CarroModule {}
