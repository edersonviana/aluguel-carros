import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { CarroModule } from './modules/carro/carro.module';
import { AluguelModule } from './modules/aluguel/aluguel.module';
import { PagamentoModule } from './modules/pagamento/pagamento.module';

@Module({
  imports: [PrismaModule, AuthModule, UserModule, CarroModule, AluguelModule, PagamentoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
