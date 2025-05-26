import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CarroService } from './carro.service';
import { CreateCarroDto } from './dtos/create-carro.dto';
import { UpdateCarroDto } from './dtos/update-carro.dto';

@Controller('carros')
export class CarroController {
  constructor(private readonly carroService: CarroService) {}

  @Post()
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
  update(@Param('id') id: string, @Body() updateCarroDto: Partial<UpdateCarroDto>) {
    return this.carroService.update(id, updateCarroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carroService.remove(id);
  }
}

