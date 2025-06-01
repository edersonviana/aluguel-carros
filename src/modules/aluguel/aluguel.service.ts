import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Aluguel, Prisma } from '@prisma/client';
import { CreateAluguelDto } from './dtos/create-aluguel.dto';
import { UpdateAluguelDto } from './dtos/update-aluguel.dto';
import { differenceInDays } from 'date-fns';

@Injectable()
export class AluguelService {
    constructor(private readonly prisma: PrismaService) { }

    async create(createAluguelDto: CreateAluguelDto) {
        // 1. Buscar o carro
        const carro = await this.prisma.carro.findUnique({
            where: { id: createAluguelDto.carroId },
        });

        if (!carro) {
            throw new Error('Carro não encontrado');
        }

        // 2. Calcular dias
        const diffDays = differenceInDays(
            new Date(createAluguelDto.dataFim),
            new Date(createAluguelDto.dataInicio),
        );

        const dias = diffDays > 0 ? diffDays : 1;  // Sempre no mínimo 1 dia

        // 3. Calcular valor total
        const valorTotal = new Prisma.Decimal(dias).mul(carro.precoPorDia);

        // 4. Criar pagamento
        const pagamento = await this.prisma.pagamento.create({
            data: {
                valor: valorTotal,
                formaPagamento: createAluguelDto.formaPagamento,
            },
        });

        // 5. Criar aluguel
        const aluguel = await this.prisma.aluguel.create({
            data: {
                usuarioId: createAluguelDto.usuarioId,
                carroId: createAluguelDto.carroId,
                dataInicio: createAluguelDto.dataInicio,
                dataFim: createAluguelDto.dataFim,
                valorTotal: valorTotal,
                pagamentoId: pagamento.id,
            },
            include: {
                pagamento: true,
            },
        });

        return aluguel;
    }

    async findByUserId(userId: string) {
        return this.prisma.aluguel.findMany({
            where: { usuarioId: userId }, 
            orderBy: { dataInicio: 'desc' },
            include: { carro: true },
        });
    }



    async findAll(): Promise<Aluguel[]> {
        return this.prisma.aluguel.findMany({
            include: { carro: true, usuario: true, pagamento: true },
        });
    }

    async findOne(id: string): Promise<Aluguel | null> {
        return this.prisma.aluguel.findUnique({
            where: { id },
            include: { carro: true, usuario: true, pagamento: true },
        });
    }

    async update(id: string, dto: UpdateAluguelDto): Promise<Aluguel> {
        return this.prisma.aluguel.update({
            where: { id },
            data: dto,
        });
    }

    async remove(id: string): Promise<Aluguel> {
        return this.prisma.aluguel.delete({
            where: { id },
        });
    }
}
