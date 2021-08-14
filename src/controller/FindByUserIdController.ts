import { Request, Response } from "express";
import { FindByUserIdService } from "../service/FindByUserIdService";
export class FindByUserIdController{

    async handle(request: Request, response: Response) {
        
        const { id } = request.params;

        const findByUserIdService = new FindByUserIdService();

        const user = await findByUserIdService.execute(id);

        return response.status(200).json(user);
    }
}