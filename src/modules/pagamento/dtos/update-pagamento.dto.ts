import { IsEnum, IsNumber, IsOptional, IsUUID } from 'class-validator';
import { FormaPagamento, PagamentoStatus } from '@prisma/client';

export class UpdatePagamentoDto {

  @IsEnum(FormaPagamento)
  @IsOptional()
  formaPagamento?: FormaPagamento;

}
