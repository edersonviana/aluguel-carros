import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService, private jwtService: JwtService){}

    
    async signup(data: SignUpDTO){
        const userAlreadyExists =  await this.prisma.usuario.findUnique({
            where: {
                email: data.email,
            },
        });
        if(userAlreadyExists){
            throw new UnauthorizedException("Usuário já existente!");
        }
        const hashedPassword = await bcrypt.hash(data.senha, 10);
        const user = await this.prisma.usuario.create({
            data: {
              ...data,
              dataNascimento: new Date(data.dataNascimento),
              senha: hashedPassword,
            },
          });
        return {
            id: user.id,
            name: user.nome,
            email: user.email,
        };
    }

    async signin(data: SignInDTO){
        const user =  await this.prisma.usuario.findUnique({
            where: {
                email: data.email,
            },
        });     
        if(!user){
            throw new UnauthorizedException("Credenciais inválidas!");
        }
        const passowrdMatch = await bcrypt.compare(data.senha, user.senha);
        if(!passowrdMatch){
            throw new UnauthorizedException("Credenciais inválidas");
        }
        const accessToken = await this.jwtService.signAsync({
            id: user.id,
            nome: user.nome,
            email: user.email,
            role: user.role,
        });
        return {
            accessToken,
            user: {
                ...user,
                senha: undefined, // Exclude password from the response
            },
        };
    }

}
