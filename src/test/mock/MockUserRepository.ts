import { IUser } from "@domain/models/User";
import { IUserRepository, TUserToCreate } from "@domain/repositories/IUserRepository";
import { factoryUser } from "../../test/factory/factoryUser";

export class MockUserRepository implements IUserRepository {
    async create(user: TUserToCreate): Promise<IUser> {
        return factoryUser()
    }

    async delete(externalId: string): Promise<void> { }

    async findAll(): Promise<IUser[]> {
        return [factoryUser()]
    }

    async findOne(externalId: string): Promise<IUser | null> {
        return factoryUser()
    }

    async update(externalId: string, user: Partial<TUserToCreate>): Promise<IUser> {
        return factoryUser()
    }
}