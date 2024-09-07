import { IUserRepository } from "@domain/repositories/IUserRepository";
import { UserRepository } from "@infra/persistence/typeorm/repositories/UserRepository";
import { container } from "tsyringe";

container.registerSingleton<IUserRepository>('IUserRepository', UserRepository)