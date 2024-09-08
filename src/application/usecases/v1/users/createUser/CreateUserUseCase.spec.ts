import { ICreateUserUseCase } from "./ICreateUserUseCase";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { TCreateUserUseCaseRequest } from "./TCreateUserUseCase";
import { BadRequest } from "@infra/http/errors/BadRequest";
import { IUserRepository } from "@domain/repositories/IUserRepository";
import { afterEach } from "node:test";
import { factoryUser } from "../../../../../test/factory/factoryUser";
import { MockUserRepository } from "../../../../../test/mock/MockUserRepository";

let useCase: ICreateUserUseCase
let userRepository: IUserRepository

const CORRECT_USER = 'test.silva'
const CORRECT_PASS = 'Corr3ct-'
const CORRECT_EMAIL = 'test@test.com'
const CORRECT_BIRTH = (new Date()).toISOString()

describe('CreateUserUseCase', () => {
    beforeAll(() => {
        userRepository = new MockUserRepository()
        useCase = new CreateUserUseCase(userRepository)
    })

    afterEach(() => {
        jest.restoreAllMocks()
        jest.resetAllMocks()
    })

    it("when the length of the password isn't equal or more than 6 caracters should trow a BadRequest error with the message 'Invalid password'", async () => {
        const passwordWithNotAllowedLength = '12345'
        let throwAnError = false

        const useCaseRequest: TCreateUserUseCaseRequest = {
            name: CORRECT_USER,
            password: passwordWithNotAllowedLength,
            email: CORRECT_EMAIL,
            birthday: CORRECT_BIRTH
        }

        try {
            await useCase.execute(useCaseRequest)
        } catch (err) {
            throwAnError = true
            expect(err).toBeInstanceOf(BadRequest)
            expect(err.message).toBe('Invalid password')
        }

        expect(throwAnError).toBeTruthy()
    })

    it("when the password dont have at least one uppercase character should throw a BadRequest error with 'Invalid password'", async () => {
        const passwordWithoutUppercaseCharacter = 'wr0ng-' // dont have at least one uppercase character
        let throwAnError = false

        const useCaseRequest: TCreateUserUseCaseRequest = {
            name: CORRECT_USER,
            password: passwordWithoutUppercaseCharacter,
            email: CORRECT_EMAIL,
            birthday: CORRECT_BIRTH
        }

        try {
            await useCase.execute(useCaseRequest)
        } catch (err) {
            throwAnError = true
            expect(err).toBeInstanceOf(BadRequest)
            expect(err.message).toBe('Invalid password')
        }

        expect(throwAnError).toBeTruthy()
    })

    it("when the password dont have at least one number character should throw a BadRequest error with 'Invalid password'", async () => {
        const passwordWithoutNumberCharacter = 'Wrong-' // dont have at least one number character
        let throwAnError = false

        const useCaseRequest: TCreateUserUseCaseRequest = {
            name: CORRECT_USER,
            password: passwordWithoutNumberCharacter,
            email: CORRECT_EMAIL,
            birthday: CORRECT_BIRTH
        }

        try {
            await useCase.execute(useCaseRequest)
        } catch (err) {
            throwAnError = true
            expect(err).toBeInstanceOf(BadRequest)
            expect(err.message).toBe('Invalid password')
        }

        expect(throwAnError).toBeTruthy()
    })

    it("when the password dont have at least one lowercase character should throw a BadRequest error with 'Invalid password'", async () => {
        const passwordWithoutLowercaseCharacter = 'WR0NG-' // dont have at least one lowercase character
        let throwAnError = false

        const useCaseRequest: TCreateUserUseCaseRequest = {
            name: CORRECT_USER,
            password: passwordWithoutLowercaseCharacter,
            email: CORRECT_EMAIL,
            birthday: CORRECT_BIRTH
        }

        try {
            await useCase.execute(useCaseRequest)
        } catch (err) {
            throwAnError = true
            expect(err).toBeInstanceOf(BadRequest)
            expect(err.message).toBe('Invalid password')
        }

        expect(throwAnError).toBeTruthy()
    })

    it("when the password dont have at least one special character should throw a BadRequest error with 'Invalid password'", async () => {
        const passwordWithoutLowercaseCharacter = 'Wr0ong' // dont have at least one special character
        let throwAnError = false

        const useCaseRequest: TCreateUserUseCaseRequest = {
            name: CORRECT_USER,
            password: passwordWithoutLowercaseCharacter,
            email: CORRECT_EMAIL,
            birthday: CORRECT_BIRTH
        }

        try {
            await useCase.execute(useCaseRequest)
        } catch (err) {
            throwAnError = true
            expect(err).toBeInstanceOf(BadRequest)
            expect(err.message).toBe('Invalid password')
        }

        expect(throwAnError).toBeTruthy()
    })

    it(`
        when the password have 
            at least one special character 
            and at least one uppercase character
            and at least one lowercase character
            and at least one number character
            and a length equal or more than 6 characters
        should 
            throw return the created user
        `, async () => {
        const userRepositorySpy = jest.spyOn(userRepository, 'findByEmail').mockResolvedValue(null)

        const useCaseRequest: TCreateUserUseCaseRequest = {
            name: CORRECT_USER,
            password: CORRECT_PASS,
            email: CORRECT_EMAIL,
            birthday: CORRECT_BIRTH
        }

        const result = await useCase.execute(useCaseRequest)

        expect(result).not.toBeNull()
        expect(userRepositorySpy).toBeCalledTimes(1)
    })

    it("when the email already exist should throw a BadRequest error with 'Invalid email'", async () => {
        jest.spyOn(userRepository, 'findByEmail').mockResolvedValue(factoryUser())
        let throwAnError = false

        const useCaseRequest: TCreateUserUseCaseRequest = {
            name: CORRECT_USER,
            password: CORRECT_PASS,
            email: CORRECT_EMAIL,
            birthday: CORRECT_BIRTH
        }

        try {
            await useCase.execute(useCaseRequest)
        } catch (err) {
            throwAnError = true
            expect(err).toBeInstanceOf(BadRequest)
            expect(err.message).toBe('Invalid email')
        }

        expect(throwAnError).toBeTruthy()
    })
})