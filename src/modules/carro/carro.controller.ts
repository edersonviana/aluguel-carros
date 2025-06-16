import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { CarroService } from './carro.service';
import { CreateCarroDto } from './dtos/create-carro.dto';
import { UpdateCarroDto } from './dtos/update-carro.dto';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@UseGuards(AuthGuard, RolesGuard)
@Controller('carros')
export class CarroController {
  constructor(private readonly carroService: CarroService) { }

  @Post()
  @Roles('ADMIN')
  create(@Body() createCarroDto: CreateCarroDto) {
    return this.carroService.create(createCarroDto);
  }

  @Get()
  findAll() {
    return this.carroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carroService.findOne(id);
  }

  @Put(':id')
  @Roles('ADMIN')
  update(@Param('id') id: string, @Body() updateCarroDto: Partial<UpdateCarroDto>) {
    return this.carroService.update(id, updateCarroDto);
  }

  @Delete(':id')
  @Roles('ADMIN')
  remove(@Param('id') id: string) {
    return this.carroService.remove(id);
  }

  @Get('/available')
  findAvailable() {
    return this.carroService.findAvailable();
  }
}

