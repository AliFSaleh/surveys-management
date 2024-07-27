import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UsersService } from "src/users/users.service";
import { CreateUserDto } from "src/users/dto";
import { loginDto } from "./dto";

@Controller('api/auth')

export class AuthController {
    constructor (
        private authService: AuthService,
        private userService: UsersService
    ) {}

    @Post('signup')
    signup(@Body() dto: CreateUserDto) {
        return this.userService.createUser(dto)
    }

    @Post('login')
    login(@Body() dto: loginDto) {
        return this.authService.login(dto)
    }
}