import { ListUsersService } from './../service/ListUsersService';
import {Response,Request } from "express";
export class ListUsersController{

    async handle(request:Request,response: Response) {
        
        const listUserService = new ListUsersService();

        const list = await listUserService.execute();

        return response.status(200).json(list);
    }
}