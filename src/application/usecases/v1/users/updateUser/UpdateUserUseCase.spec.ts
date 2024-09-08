import { factoryUser } from "../../../../.../../../test/factory/factoryUser"
import { IUpdateUserUseCase } from "./IUpdateUserUseCase"
import { IUserRepository } from "@domain/repositories/IUserRepository"
import { UpdateuserUseCase } from "./UpdateUserUseCase"
import { MockUserRepository } from "../../../../../test/mock/MockUserRepository"
import { BadRequest } from "@infra/http/errors/BadRequest"
import { User } from "@domain/models/User"


let userRepository: IUserRepository
let useCase: IUpdateUserUseCase

describe('UpdateUserUseCase', () => {
    beforeAll(() => {
        userRepository = new MockUserRepository()
        useCase = new UpdateuserUseCase(userRepository)
    })

    afterEach(() => {
        jest.restoreAllMocks()
    })

    it('when the user exists and the user validation return true should return the updated user', async () => {
        const validUser = factoryUser()

        const result = await useCase.execute({
            id: validUser.externalId,
            birthday: (new Date('2024-08-01')).toISOString(),
            name: 'valid_name'
        })

        expect(result.id).toBe(validUser.id)
    })

    it('when the user not exists should throw a BadRequest error with message "invalid user"', async () => {
        let throwSomeErr: boolean = false

        const userRepositoryFindById = jest.spyOn(userRepository, 'findOne').mockResolvedValue(null)

        try {
            await useCase.execute({
                id: 'invalid_id'
            })
        } catch (err) {
            throwSomeErr = true
            expect(err).toBeInstanceOf(BadRequest)
            expect(err.message).toBe("invalid user")
        }

        expect(throwSomeErr).toBeTruthy()
        expect(userRepositoryFindById).toBeCalledTimes(1)
    })

    it('when the user exists and the user validation returns false should throw a BadRequest error with the error message', async () => {
        let throwSomeErr: boolean = false

        const expectedErrorMessage = 'error massage'
        const userValidationSpy = jest.spyOn(User.prototype, 'validate').mockReturnValue([false, Error(expectedErrorMessage)])

        try {
            await useCase.execute({
                id: 'valid_id',
            })
        } catch (err) {
            throwSomeErr = true
            expect(err).toBeInstanceOf(BadRequest)
            expect(err.message).toBe(expectedErrorMessage)
        }

        expect(throwSomeErr).toBeTruthy()
        expect(userValidationSpy).toHaveBeenCalledTimes(1)
    })
})