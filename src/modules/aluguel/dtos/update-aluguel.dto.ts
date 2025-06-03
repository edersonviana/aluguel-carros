import { IsDateString, IsNumber, IsOptional, IsUUID } from 'class-validator';

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

}
