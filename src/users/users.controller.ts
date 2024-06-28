import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class UsersController {
  @Post('/signup')
  async createUser(@Body() user: CreateUserDto) {
    return user;
  }
}
