import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entity/users.entity";

@Injectable()
export class UsersService {
    constructor (
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {}

    async findUser (email) {
        return await this.usersRepository.findOneBy({email: email})
    }
}