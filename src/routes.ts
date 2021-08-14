import { TagCreateController } from './controller/TagCreateController';
import { Router } from "express";
import { CreateUserController } from './controller/CreateUserController';
import { FindByUserIdController } from './controller/FindByUserIdController';
import { ListUsersController } from './controller/ListUserController';

const router = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const findByUserIdController = new FindByUserIdController();
const tagCreateController = new TagCreateController();

//USER
router.post("/users", createUserController.handle);
router.get("/users", listUsersController.handle);
router.get("/users/:id", findByUserIdController.handle);

//TAG
router.post("/tags",tagCreateController.handle);

export { router };
