import { IUserRepository } from "@domain/repositories/IUserRepository"
import { FindOneOrAllUsersUseCase } from "./FindOneOrAllUsersUseCase"
import { MockUserRepository } from "../../../../../test/mock/MockUserRepository"
import { IUser } from "@domain/models/User"
import { factoryUser } from "../../../../../test/factory/factoryUser"

let userRepository: IUserRepository
let useCase: FindOneOrAllUsersUseCase

describe('FindOneOrAllNotificationsUseCase', () => {
    beforeAll(() => {
        userRepository = new MockUserRepository()
        useCase = new FindOneOrAllUsersUseCase(userRepository)
    })

    afterEach(() => {
        jest.restoreAllMocks()
    })

    it('when the request has an id and this id exists should return only one data inside the array', async () => {
        const expectedNotification: IUser = factoryUser()
        const userRepositoryFindOneSpy = jest.spyOn(userRepository, 'findOne').mockResolvedValue(expectedNotification)

        const result = await useCase.execute({
            id: 'valid_id'
        })

        expect(userRepositoryFindOneSpy).toBeCalledTimes(1)
        expect(result).toMatchObject([expectedNotification])
        expect(result.length).toBe(1)
    })

    it('when the request has an id and this id not exists should return a empty array', async () => {
        const userRepositoryFindOneSpy = jest.spyOn(userRepository, 'findOne').mockResolvedValue(null)

        const result = await useCase.execute({
            id: 'invalid_id'
        })

        expect(userRepositoryFindOneSpy).toBeCalledTimes(1)
        expect(result.length).toBe(0)
    })

    it('when the request has not an id should return all the notifications', async () => {
        const expectedNotification: IUser[] = [
            factoryUser(),
            factoryUser(),
            factoryUser()
        ]
        const userRepositoryFindAllSpy = jest.spyOn(userRepository, 'findAll').mockResolvedValue(expectedNotification)

        const result = await useCase.execute({})

        expect(userRepositoryFindAllSpy).toBeCalledTimes(1)
        expect(result).toMatchObject(expectedNotification)
    })

})