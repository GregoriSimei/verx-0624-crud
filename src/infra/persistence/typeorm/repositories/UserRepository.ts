import { IUser } from "@domain/models/User";
import { IUserRepository, TUserToCreate } from "@domain/repositories/IUserRepository";
import { injectable } from "tsyringe";
import { Repository } from "typeorm";
import { User } from "../models/user.model";
import { TypeOrmConnection } from "../TypeORMConection";

@injectable()
export class UserRepository implements IUserRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = TypeOrmConnection.getRepository(User)
    }

    async create(user: TUserToCreate): Promise<IUser> {
        return this.repository.create(user)
    }

    async delete(externalId: string): Promise<void> {
        this.repository.delete({
            externalId
        })
    }

    async update(externalId: string, user: Partial<TUserToCreate>): Promise<IUser> {
        await this.repository.update({
            externalId
        }, user)
        return this.repository.findOneBy({ externalId })
    }

    async findAll(): Promise<IUser[]> {
        return this.repository.find({})
    }

    async findOne(externalId: string): Promise<IUser | null> {
        return this.repository.findOneBy({ externalId })
    }

    async findByEmail(email: string): Promise<IUser | null> {
        return this.repository.findOneBy({ email })
    }
}