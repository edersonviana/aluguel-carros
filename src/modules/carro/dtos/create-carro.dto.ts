import { CarroStatus } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateCarroDto {
  @IsString()
  @IsNotEmpty()
  modelo: string;

  @IsString()
  @IsNotEmpty()
  marca: string;

  @IsString()
  @IsNotEmpty()
  placa: string;

  @IsInt()
  @IsNotEmpty()
  ano: number;

  @IsEnum(CarroStatus)
  status?: CarroStatus = CarroStatus.DISPONIVEL;
}
