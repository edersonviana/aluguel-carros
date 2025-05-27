import { Controller, Get, Param, Put, Body, UseGuards } from '@nestjs/common';
import { PagamentoService } from './pagamento.service';
import { UpdatePagamentoDto } from './dtos/update-pagamento.dto';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@UseGuards(AuthGuard, RolesGuard)
@Controller('pagamentos')
export class PagamentoController {
  constructor(private readonly pagamentoService: PagamentoService) {}

  @Get()
  @Roles('ADMIN')
  findAll() {
    return this.pagamentoService.findAll();
  }

  @Get(':id')
  @Roles('ADMIN')
  findOne(@Param('id') id: string) {
    return this.pagamentoService.findOne(id);
  }

  @Put(':id')
  @Roles('ADMIN')
  update(@Param('id') id: string, @Body() updatePagamentoDto: UpdatePagamentoDto) {
    return this.pagamentoService.update(id, updatePagamentoDto);
  }
}
