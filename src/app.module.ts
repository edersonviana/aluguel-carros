import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { CarroModule } from './modules/carro/carro.module';
import { AluguelModule } from './modules/aluguel/aluguel.module';

@Module({
  imports: [PrismaModule, AuthModule, UserModule, CarroModule, AluguelModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
