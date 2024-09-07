import { IUser } from "@domain/models/User"

export type TFindOneOrAllUsersUseCaseRequest = {
    id?: string
}

export type TFindOneOrAllUsersUseCaseResponse = IUser[]