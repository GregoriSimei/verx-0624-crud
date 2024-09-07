import { CreateUserUseCase } from "@application/usecases/v1/users/createUser/CreateUserUseCase";
import { ICreateUserUseCase } from "@application/usecases/v1/users/createUser/ICreateUserUseCase";
import { FindOneOrAllUsersUseCase } from "@application/usecases/v1/users/findOneOrAllUsers/FindOneOrAllUsersUseCase";
import { IFindOneOrAllUsersUseCase } from "@application/usecases/v1/users/findOneOrAllUsers/IFindOneOrAllUsersUseCase";
import { container } from "tsyringe";

container.registerSingleton<IFindOneOrAllUsersUseCase>('IFindOneOrAllUsersUseCase', FindOneOrAllUsersUseCase)
container.registerSingleton<ICreateUserUseCase>('ICreateUserUseCase', CreateUserUseCase)