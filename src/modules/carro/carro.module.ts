import { Module } from '@nestjs/common';
import { CarroService } from './carro.service';
import { CarroController } from './carro.controller';
import { CarroRepository } from './repositories/carro.repository';

@Module({
  controllers: [CarroController],
  providers: [
    CarroService,
    CarroRepository,
    {
      provide: 'ICarroRepository',
      useClass: CarroRepository,
    },
  ],
})
export class CarroModule {}
