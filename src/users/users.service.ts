import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entity/users.entity";
import { CreateUserDto } from "./dto";
import * as bcrypt from 'bcrypt' 

@Injectable()
export class UsersService {
    constructor (
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async findUser (email: string) {
        return await this.userRepository.findOneBy({email: email})
    }

    async createUser (data: CreateUserDto) {
        data.password = await bcrypt.hash(data.password, 12) 
        const user = await this.userRepository.save(data)

        return user
    }
}