import { IUserRepository } from "@domain/repositories/IUserRepository"
import { IUpdateUserUseCase } from "./IUpdateUserUseCase"
import { inject, injectable } from "tsyringe"
import { TUpdateUserUseCaseRequest, TUpdateUserUseCaseResponse } from "./TUpdateUserUseCase"
import { BadRequest } from "@infra/http/errors/BadRequest"
import { User } from "@domain/models/User"

@injectable()
export class UpdateuserUseCase implements IUpdateUserUseCase {
    constructor(
        @inject('IUserRepository')
        private userRepository: IUserRepository
    ) { }

    async execute(request: TUpdateUserUseCaseRequest): Promise<TUpdateUserUseCaseResponse> {
        const { id, birthday, name } = request

        const userFound = await this.userRepository.findOne(id)
        if (!userFound) throw new BadRequest('invalid user')

        const user = new User(userFound)
        user.birthday = birthday ? new Date(birthday) : user.birthday
        user.name = name || user.name

        const [allRight, err] = user.validate()
        if (!allRight) throw new BadRequest(err.message)

        const userUpdated = await this.userRepository.update(id, user)
        return userUpdated
    }
}