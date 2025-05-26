import { Body, Controller, Get, Post, Request, UseGuards, HttpCode} from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}


    @Post('signup')
    async signup(@Body() body: SignUpDTO){
        return this.authService.signup(body);
    }

    @Post('signin')
    @HttpCode(200)
    async signin(@Body() body: SignInDTO){
        return this.authService.signin(body);
    }

    @UseGuards(AuthGuard)
    @Get('me')
    async me (@Request() request) {
        return request.user;
    }
}
