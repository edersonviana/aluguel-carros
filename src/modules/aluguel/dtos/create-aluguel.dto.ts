import { IsNotEmpty, IsUUID, IsDateString, IsNumber } from 'class-validator';

export class CreateAluguelDto {
  @IsUUID()
  @IsNotEmpty()
  usuarioId: string;

  @IsUUID()
  @IsNotEmpty()
  carroId: string;

  @IsDateString()
  @IsNotEmpty()
  dataInicio: string;

  @IsDateString()
  @IsNotEmpty()
  dataFim: string;

  @IsNumber()
  @IsNotEmpty()
  valorTotal: number;
}
