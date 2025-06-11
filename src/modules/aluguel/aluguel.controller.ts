import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Request, Patch } from '@nestjs/common';
import { AluguelService } from './aluguel.service';
import { Prisma } from '@prisma/client';
import { CreateAluguelDto } from './dtos/create-aluguel.dto';
import { UpdateAluguelDto } from './dtos/update-aluguel.dto';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@UseGuards(AuthGuard, RolesGuard)
@Controller('alugueis')
export class AluguelController {
    constructor(private readonly aluguelService: AluguelService) { }

    @Post()
    create(@Body() createAluguelDto: CreateAluguelDto) {
        return this.aluguelService.create(createAluguelDto);
    }

    @Get('user')
    async findMyRentals(@Request() req) {
        const userId = req.user.id;
        return this.aluguelService.findByUserId(userId);
    }

    @Get()
    findAll() {
        return this.aluguelService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.aluguelService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateAluguelDto: UpdateAluguelDto) {
        return this.aluguelService.update(id, updateAluguelDto);
    }

    @Patch(':id/status')
    updateStatus(
        @Param('id') id: string,
        @Body() dto: UpdateAluguelDto
    ) {
        return this.aluguelService.updateStatus(id, dto);
    }

    // @Delete(':id')
    // @Roles("ADMIN")
    // remove(@Param('id') id: string) {
    //     return this.aluguelService.remove(id);
    // }
}
