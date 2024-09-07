import { DataBaseModel } from "@domain/models/Database";
import { IUser } from "@domain/models/User";

export type TUserToCreate = Omit<IUser, keyof DataBaseModel | 'externalId'> & Partial<DataBaseModel & { externalId: string }>

export interface IUserRepository {
    create(user: TUserToCreate): Promise<IUser>
    update(externalId: string, user: Partial<TUserToCreate>): Promise<IUser>
    delete(externalId: string): Promise<void>
    findOne(externalId: string): Promise<IUser | null>
    findAll(): Promise<IUser[]>
}