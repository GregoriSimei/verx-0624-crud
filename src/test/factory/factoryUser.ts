import { IUser } from "@domain/models/User";

export const factoryUser = (): IUser => {
    return {
        id: 1,
        externalId: '123',
        email: 'email@test.com',
        name: 'test',
        pass: 'pass123',
        birthday: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
    }
}