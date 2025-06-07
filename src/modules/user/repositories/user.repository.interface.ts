import { Usuario } from '@prisma/client';

export interface IUserRepository {
  findByEmail(email: string): Promise<Usuario | null>;
  createAdmin(data: any): Promise<Usuario>;
}
