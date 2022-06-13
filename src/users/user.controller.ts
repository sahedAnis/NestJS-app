import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreaterUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService : UserService) {}

    @Get('me')
    getUser() : string {
        return this.userService.me();
    }

    @Post('create')
    async create(@Body() createUserDto: CreaterUserDTO) {
        this.userService.create(createUserDto);
    }

}