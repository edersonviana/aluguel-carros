import { FormaPagamento, PagamentoStatus } from '@prisma/client';
import { IsNotEmpty, IsUUID, IsDateString, IsNumber, IsEnum } from 'class-validator';

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

  @IsEnum(FormaPagamento)
  @IsNotEmpty()
  formaPagamento: FormaPagamento;
  
}
