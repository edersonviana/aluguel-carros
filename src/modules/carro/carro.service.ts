import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Carro } from '@prisma/client';
import { CreateCarroDto } from './dtos/create-carro.dto';
import { UpdateCarroDto } from './dtos/update-carro.dto';

@Injectable()
export class CarroService {
    constructor(private prisma: PrismaService) { }

    async create(dto: CreateCarroDto): Promise<Carro> {
        return this.prisma.carro.create({
            data: dto,
        });
    }

    async findAll(): Promise<Carro[]> {
        return this.prisma.carro.findMany();
    }

    async findOne(id: string): Promise<Carro | null> {
        return this.prisma.carro.findUnique({
            where: { id },
        });
    }

    async update(id: string, dto: UpdateCarroDto): Promise<Carro> {
    return this.prisma.carro.update({
        where: { id },
        data: dto,
    });
    }

    async remove(id: string): Promise<Carro> {
        return this.prisma.carro.delete({
            where: { id },
        });
    }
}
