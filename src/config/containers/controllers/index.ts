import { CreateUserController } from "@infra/http/controllers/v1/users/createUser/CreateUserController";
import { DeleteUserController } from "@infra/http/controllers/v1/users/deleteUser/DeleteUserController";
import { FindOneOrAllUsersController } from "@infra/http/controllers/v1/users/findOneOrAllUsers/FindOneOrAllUsersController";
import { UpdateUserController } from "@infra/http/controllers/v1/users/updateUser/UpdateUserController";
import { Controller } from "@infra/http/protocols/controller";
import { container } from "tsyringe";

container.registerSingleton<Controller>('FindOneOrAllUsersController', FindOneOrAllUsersController)
container.registerSingleton<Controller>('CreateUserController', CreateUserController)
container.registerSingleton<Controller>('UpdateUserController', UpdateUserController)
container.registerSingleton<Controller>('DeleteUserController', DeleteUserController)