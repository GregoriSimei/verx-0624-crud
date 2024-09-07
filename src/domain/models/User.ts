import { DataBaseModel } from "./Database"

enum UserError {
    INVALID_NAME = 'invalid name',
    INVALID_EMAIL = 'invalid email',
    INVALID_PASS = 'invalid password',
    INVALID_BIRTHDAY = 'invalid birthday',
}

export const InvalidNameErr = Error(UserError.INVALID_NAME)
export const InvalidEmailErr = Error(UserError.INVALID_EMAIL)
export const InvalidPassErr = Error(UserError.INVALID_PASS)
export const InvalidBirthdayErr = Error(UserError.INVALID_BIRTHDAY)

export interface IUser extends DataBaseModel {
    externalId: string
    name: string
    email: string
    pass: string
    birthday: Date
}

const MAX_AGE_AVAILABLE = 120

type PartialUser = Omit<IUser, keyof DataBaseModel | 'externalId'> & Partial<DataBaseModel & { externalId: string }>

export class User implements PartialUser {
    id?: number
    externalId?: string
    name: string
    email: string
    pass: string
    birthday: Date
    createdAt?: Date
    updatedAt?: Date

    constructor(user: PartialUser) {
        this.id = user.id || null
        this.externalId = user.externalId || null
        this.name = user.name
        this.email = user.email
        this.pass = user.pass
        this.birthday = user.birthday
        this.createdAt = user.createdAt || null
        this.updatedAt = user.updatedAt || null
    }

    validate(): [boolean, Error] {
        if (this.name.trim() == '') {
            return [false, InvalidNameErr]
        }

        if (this.email.trim() == '' || !this.email.includes('@')) {
            return [false, InvalidEmailErr]
        }

        if (this.pass.trim() == '') {
            return [false, InvalidPassErr]
        }

        if ((new Date()).getFullYear() - this.birthday.getFullYear() > MAX_AGE_AVAILABLE) {
            return [false, InvalidBirthdayErr]
        }

        return [true, null]
    }
}