import { IsDateString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class SignUpDTO {
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



export class SignInDTO {
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    senha: string;
}