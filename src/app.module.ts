import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CarroModule } from './carro/carro.module';

@Module({
  imports: [PrismaModule, AuthModule, UserModule, CarroModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
