import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ConnectUser } from './dto/connect-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  connect(@Body() connect: ConnectUser) {
    return this.authService.connectUser(connect);
  }

  @Post('signup')
  register(@Body() credentials: CreateAuthDto) {
    return this.authService.registerUser(credentials)
  }
}
