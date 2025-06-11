import { IsDateString, IsNumber, IsOptional, IsUUID, IsEnum  } from 'class-validator';
import { AluguelStatus } from '@prisma/client';

export class UpdateAluguelDto {
  @IsUUID()
  @IsOptional()
  usuarioId: string;

  @IsUUID()
  @IsOptional()
  carroId: string;

  @IsDateString()
  @IsOptional()
  dataInicio: string;

  @IsDateString()
  @IsOptional()
  dataFim: string;

  @IsEnum(AluguelStatus)
  status: AluguelStatus;
}
