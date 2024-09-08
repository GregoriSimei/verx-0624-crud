import { DeleteUserUseCase } from "./DeleteUserUseCase"
import { MockUserRepository } from "../../../../../test/mock/MockUserRepository"

let usecase: DeleteUserUseCase

describe('DeleteUserUseCase', () => {
    beforeAll(() => {
        const userRepository = new MockUserRepository()
        usecase = new DeleteUserUseCase(userRepository)
    })

    it('should execute without error', async () => {
        let throwSomeErr: boolean = false

        try {
            await usecase.execute({ id: 'any_id' })
        } catch {
            throwSomeErr = true
        }

        expect(throwSomeErr).toBeFalsy()
    })
})