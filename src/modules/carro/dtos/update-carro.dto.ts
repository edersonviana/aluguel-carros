import { CarroStatus } from '@prisma/client';
import { IsEnum, IsOptional, IsString, IsInt } from 'class-validator';

export class UpdateCarroDto {
  @IsOptional()
  @IsString()
  modelo?: string;

  @IsOptional()
  @IsString()
  marca?: string;

  @IsOptional()
  @IsString()
  placa?: string;

  @IsOptional()
  @IsInt()
  ano?: number;

  @IsOptional()
  imagem?: string;

  @IsOptional()
  precoPorDia?: string;

  @IsOptional()
  @IsEnum(CarroStatus)
  status?: CarroStatus;
}
