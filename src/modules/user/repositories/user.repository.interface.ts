import { Usuario } from '@prisma/client';

export abstract class IUserRepository {
  abstract findByEmail(email: string): Promise<Usuario | null>;
  abstract createAdmin(data: any): Promise<Usuario>;
}
