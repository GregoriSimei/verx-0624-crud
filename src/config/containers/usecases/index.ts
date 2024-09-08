import { CreateUserUseCase } from "@application/usecases/v1/users/createUser/CreateUserUseCase";
import { ICreateUserUseCase } from "@application/usecases/v1/users/createUser/ICreateUserUseCase";
import { FindOneOrAllUsersUseCase } from "@application/usecases/v1/users/findOneOrAllUsers/FindOneOrAllUsersUseCase";
import { IFindOneOrAllUsersUseCase } from "@application/usecases/v1/users/findOneOrAllUsers/IFindOneOrAllUsersUseCase";
import { IUpdateUserUseCase } from "@application/usecases/v1/users/updateUser/IUpdateUserUseCase";
import { UpdateuserUseCase } from "@application/usecases/v1/users/updateUser/UpdateUserUseCase";
import { container } from "tsyringe";

container.registerSingleton<IFindOneOrAllUsersUseCase>('IFindOneOrAllUsersUseCase', FindOneOrAllUsersUseCase)
container.registerSingleton<ICreateUserUseCase>('ICreateUserUseCase', CreateUserUseCase)
container.registerSingleton<IUpdateUserUseCase>('IUpdateUserUseCase', UpdateuserUseCase)