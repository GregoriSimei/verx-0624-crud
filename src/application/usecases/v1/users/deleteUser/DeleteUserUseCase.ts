import { inject, injectable } from "tsyringe";
import { IDeleteUserUseCase } from "./IDeleteUserUseCase";
import { DeleteUserUseCaseRequest, DeleteUserUseCaseResponse } from "./TDeleteUserUseCase";
import { IUserRepository } from "@domain/repositories/IUserRepository";

@injectable()
export class DeleteUserUseCase implements IDeleteUserUseCase {
    constructor(
        @inject('IUserRepository')
        private userRepository: IUserRepository
    ) { }

    async execute(request: DeleteUserUseCaseRequest): Promise<DeleteUserUseCaseResponse> {
        const { id } = request
        await this.userRepository.delete(id)
    }
}