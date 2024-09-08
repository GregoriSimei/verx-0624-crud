import { IUpdateUserUseCase } from "@application/usecases/v1/users/updateUser/IUpdateUserUseCase";
import { TUpdateUserUseCaseRequest } from "@application/usecases/v1/users/updateUser/TUpdateUserUseCase";
import { Controller } from "@infra/http/protocols/controller";
import { HttpRequest, HttpResponse } from "@infra/http/protocols/http";
import { HttpResponses } from "@infra/http/protocols/httpResponses";
import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateUserController implements Controller {
    constructor(
        @inject('IUpdateUserUseCase')
        private updateUserUseCase: IUpdateUserUseCase
    ) { }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const userId = httpRequest.params.userId as string
        const body = httpRequest.body as TUpdateUserUseCaseRequest
        const result = await this.updateUserUseCase.execute({
            id: userId,
            ...body
        })
        return HttpResponses.ok(result)
    }
}