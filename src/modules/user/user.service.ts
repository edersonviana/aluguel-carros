import { Injectable, ConflictException, Inject } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateAdminDTO } from './dtos/create-admin.dto';
import { IUserRepository } from './repositories/user.repository.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject(IUserRepository)
    private readonly userRepository: IUserRepository,
  ) {}

  async createAdmin(dto: CreateAdminDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(dto.email);

    if (userAlreadyExists) {
      throw new ConflictException('Email já está em uso.');
    }

    const hashedPassword = await bcrypt.hash(dto.senha, 10);

    const admin = await this.userRepository.createAdmin({
      ...dto,
      dataNascimento: new Date(dto.dataNascimento),
      senha: hashedPassword,
      role: 'ADMIN',
    });

    return {
      id: admin.id,
      email: admin.email,
      role: admin.role,
    };
  }
}
