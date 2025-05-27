import { IsEnum, IsNotEmpty, IsNumber, IsUUID } from 'class-validator';
import { FormaPagamento, PagamentoStatus } from '@prisma/client';

export class CreatePagamentoDto {

  @IsNumber()
  @IsNotEmpty()
  valor: number;

  @IsEnum(FormaPagamento)
  @IsNotEmpty()
  formaPagamento: FormaPagamento;

  @IsEnum(PagamentoStatus)
  status?: PagamentoStatus = PagamentoStatus.PENDENTE;
}
