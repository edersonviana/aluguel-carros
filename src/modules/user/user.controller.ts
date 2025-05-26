import {
    Controller,
    Post,
    Body,
    UseGuards,
    Get,
  } from '@nestjs/common';
  import { UserService } from './user.service';
  import { Roles } from 'src/modules/auth/roles.decorator';
  import { RolesGuard } from 'src/modules/auth/roles.guard';
  import { AuthGuard } from 'src/modules/auth/auth.guard';
  import { CreateAdminDTO } from './dtos/create-admin.dto';
  
  @Controller('users')
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    @Post('create-admin')
    @UseGuards(AuthGuard, RolesGuard)
    @Roles('ADMIN') // Apenas admins podem acessar
    async createAdmin(@Body() dto: CreateAdminDTO) {
      return this.userService.createAdmin(dto);
    }
  }
  