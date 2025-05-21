import { IsDateString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAdminDTO {
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  senha: string;

  @IsNotEmpty()
  cpf: string;

  @IsDateString()
  dataNascimento: string;

  @IsOptional()
  cnh?: string;

  @IsOptional()
  telefone?: string;
}
