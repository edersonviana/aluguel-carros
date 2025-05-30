import { CarroStatus } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsString, IsInt, IsNumberString } from 'class-validator';

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

  @IsNotEmpty()
  imagem: string;

  @IsNumberString()
  @IsNotEmpty()
  precoPorDia: string;

  @IsEnum(CarroStatus)
  status?: CarroStatus = CarroStatus.DISPONIVEL;
}
