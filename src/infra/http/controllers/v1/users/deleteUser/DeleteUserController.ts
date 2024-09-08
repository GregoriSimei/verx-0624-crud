import { IDeleteUserUseCase } from "@application/usecases/v1/users/deleteUser/IDeleteUserUseCase";
import { Controller } from "@infra/http/protocols/controller";
import { HttpRequest, HttpResponse } from "@infra/http/protocols/http";
import { HttpResponses } from "@infra/http/protocols/httpResponses";
import { inject, injectable } from "tsyringe";
import { DeleteUserControllerParams } from "./DTOs/DeleteUserControllerParams";

@injectable()
export class DeleteUserController implements Controller {
    constructor(
        @inject('IDeleteUserUseCase')
        private deleteUserUseCase: IDeleteUserUseCase
    ) { }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { userId } = httpRequest.params as DeleteUserControllerParams
        await this.deleteUserUseCase.execute({ id: userId })
        return HttpResponses.noContent()
    }
}