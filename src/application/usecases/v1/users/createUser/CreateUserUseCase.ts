import { inject, injectable } from "tsyringe";
import { ICreateUserUseCase } from "./ICreateUserUseCase";
import { TCreateUserUseCaseRequest, TCreateUserUseCaseResponse } from "./CreateUserUseCaseDTO";
import { BadRequest } from "@infra/http/errors/BadRequest";
import { IUserRepository } from "@domain/repositories/IUserRepository";
import { User } from "@domain/models/User";

@injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
    constructor(
        @inject('IUserRepository')
        private userRepository: IUserRepository
    ) { }

    async execute(request: TCreateUserUseCaseRequest): Promise<TCreateUserUseCaseResponse> {
        const { password, name, email, birthday } = request

        const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])(?!.*\s).{6,}$/
        if (!strongPassword.test(password)) throw new BadRequest('Invalid password')

        const emailAlreadyExist = await this.userRepository.findByEmail(email)
        if (emailAlreadyExist) throw new BadRequest('Invalid email')

        const user = new User({
            email,
            name,
            pass: password,
            birthday: new Date(birthday)
        })
        const [allRigth, error] = user.validate()
        if (!allRigth) throw new BadRequest(error.message)

        const createdUser = await this.userRepository.create(user)

        return {
            id: createdUser.externalId,
            name: createdUser.name,
            email: createdUser.email
        }
    }
}