// src/user/user.service.ts
import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateAdminDTO } from './dtos/create-admin.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createAdmin(dto: CreateAdminDTO) {
    const userAlreadyExists = await this.prisma.usuario.findUnique({
      where: { email: dto.email },
    });

    if (userAlreadyExists) {
      throw new ConflictException('Email já está em uso.');
    }

    const hashedPassword = await bcrypt.hash(dto.senha, 10);

    const admin = await this.prisma.usuario.create({
      data: {
        ...dto,
        dataNascimento: new Date(dto.dataNascimento),
        senha: hashedPassword,
        role: 'ADMIN',
      },
    });

    return {
      id: admin.id,
      email: admin.email,
      role: admin.role,
    };
  }
}
