import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersModule } from "src/users/users.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports:[
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            // signOptions: { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
        }),
        UsersModule
    ],
    controllers:[AuthController],
    providers:[AuthService],
    exports:[]
})

export class AuthModule {}