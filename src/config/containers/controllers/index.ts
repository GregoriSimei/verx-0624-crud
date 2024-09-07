import { FindOneOrAllUsersController } from "@infra/http/controllers/v1/users/findOneOrAllUsers/FindOneOrAllUsersController";
import { Controller } from "@infra/http/protocols/controller";
import { container } from "tsyringe";

container.registerSingleton<Controller>('FindOneOrAllUsersController', FindOneOrAllUsersController)