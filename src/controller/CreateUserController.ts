import { CreateUserService } from "./../service/CreateUserService";
import { Request, Response } from "express";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({name,email,admin});

    return response.status(201).json(user);
  }
}
