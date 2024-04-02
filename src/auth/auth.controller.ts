import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from 'src/shared/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get()
    getAuth(): string {
        return this.authService.getAuth();
    }

    @Get('hello')
    getHello(): Promise<any> {
        return this.authService.getHello();
    }


    @Get(':id')
    getAuthById(@Param('id') id: string): string {
        return this.authService.getAuthById(id);
    }

    @Post()
    create(@Body() authDto: AuthDto): Promise<AuthDto> {
        return this.authService.create(authDto);
    }

    @Put(':id')
    updtate(@Param('id') id : string, @Body() authDto: AuthDto): Promise<AuthDto> {
        return this.authService.update(id, authDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<string> {
        return this.authService.delete(id);
    }

}
