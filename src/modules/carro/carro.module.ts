import { Module } from '@nestjs/common';
import { CarroService } from './carro.service';
import { CarroController } from './carro.controller';
import { CarroRepository } from './repositories/carro.repository';
import { ICarroRepository } from './repositories/carro.repository.interface';

@Module({
  controllers: [CarroController],
  providers: [
    CarroService,
    {
      provide: ICarroRepository,
      useClass: CarroRepository,
    },
  ],
})
export class CarroModule {}
