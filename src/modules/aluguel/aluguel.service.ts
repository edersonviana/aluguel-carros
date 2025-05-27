import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Aluguel, Prisma } from '@prisma/client';
import { CreateAluguelDto } from './dtos/create-aluguel.dto';
import { UpdateAluguelDto } from './dtos/update-aluguel.dto';

@Injectable()
export class AluguelService {
    constructor(private readonly prisma: PrismaService) { }

    async create(createAluguelDto: CreateAluguelDto) {

        const pagamento = await this.prisma.pagamento.create({
            data: {
                valor: createAluguelDto.valorTotal,
                formaPagamento: createAluguelDto.formaPagamento,
            },
        });

        const aluguel = await this.prisma.aluguel.create({
            data: {
                usuarioId: createAluguelDto.usuarioId,
                carroId: createAluguelDto.carroId,
                dataInicio: createAluguelDto.dataInicio,
                dataFim: createAluguelDto.dataFim,
                valorTotal: createAluguelDto.valorTotal,
                pagamentoId: pagamento.id,
            },
            include: {
                pagamento: true,
            },
        });

        return aluguel;
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
