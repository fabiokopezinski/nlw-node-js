import { Exception } from '../exception/Exception';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repository/UsersRepository';
export class FindByUserIdService{

    async execute(id: string) {
            
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne({ id });
    
        if (!user) {
            throw new Exception("User not found",404);
        }

        return user;
    }
}