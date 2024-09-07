import { ICreateUserUseCase } from "@application/usecases/v1/users/createUser/ICreateUserUseCase";
import { Controller } from "@infra/http/protocols/controller";
import { HttpRequest, HttpResponse } from "@infra/http/protocols/http";
import { HttpResponses } from "@infra/http/protocols/httpResponses";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateUserController implements Controller {
    constructor(
        @inject('ICreateUserUseCase')
        private createUserUseCase: ICreateUserUseCase
    ) { }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const body = httpRequest.body
        const result = await this.createUserUseCase.execute(body)
        return HttpResponses.ok(result)
    }
}