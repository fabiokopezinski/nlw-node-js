import { getCustomRepository } from "typeorm";
import { Exception } from "../exception/Exception";
import { UserRepository } from "./../repository/UsersRepository";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean; //opcional
}

export class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    if (!email) {
      throw new Exception("Email incorrect",400);
    }

    const userRepository = getCustomRepository(UserRepository);

    const userAlreadyExists = await userRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new Exception("User already exists",400);
    }

    const user = userRepository.create({
      name,
      email,
      admin,
    });

    await userRepository.save(user);

    return user;
  }
}
