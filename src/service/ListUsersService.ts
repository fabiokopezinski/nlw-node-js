import { UserRepository } from './../repository/UsersRepository';
import { getCustomRepository } from 'typeorm';
export class ListUsersService{

    async execute() {
        
        const userRepository = getCustomRepository(UserRepository);

        return userRepository.find();
    }
}