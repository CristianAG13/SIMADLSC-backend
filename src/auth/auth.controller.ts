import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: { email_Usuario: string; contraseña_Usuario: string }) {
    return this.authService.login(loginDto.email_Usuario, loginDto.contraseña_Usuario);
  }
}
