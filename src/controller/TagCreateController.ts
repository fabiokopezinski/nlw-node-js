import { TagCreateService } from './../service/TagCreateService';
import { Request, Response } from "express";


export class TagCreateController{

    async handle(request: Request, response: Response) {
        
        const { name } = request.body;
        
        const tagCreateService = new TagCreateService();

        const tag = await tagCreateService.execute(name);

        return response.status(201).json(tag);

    }
}