import { IUser } from "@domain/models/User"

export type TUpdateUserUseCaseRequest = {
    id: string
    name?: string
    birthday?: string
}

export type TUpdateUserUseCaseResponse = IUser
