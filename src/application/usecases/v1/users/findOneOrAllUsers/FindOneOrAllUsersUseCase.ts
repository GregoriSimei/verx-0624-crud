import { inject, injectable } from "tsyringe";
import { IFindOneOrAllUsersUseCase } from "./IFindOneOrAllUsersUseCase";
import { TFindOneOrAllUsersUseCaseRequest, TFindOneOrAllUsersUseCaseResponse } from "./TFindOneOrAllUsersUseCase";
import { IUserRepository } from "@domain/repositories/IUserRepository";

@injectable()
export class FindOneOrAllUsersUseCase implements IFindOneOrAllUsersUseCase {
    constructor(
        @inject('IUserRepository')
        private userRepository: IUserRepository
    ) { }

    async execute(request: TFindOneOrAllUsersUseCaseRequest): Promise<TFindOneOrAllUsersUseCaseResponse> {
        const { id } = request

        if (id) {
            const response = await this.userRepository.findOne(id)
            return response ? [response] : []
        }

        return await this.userRepository.findAll()
    }
}
