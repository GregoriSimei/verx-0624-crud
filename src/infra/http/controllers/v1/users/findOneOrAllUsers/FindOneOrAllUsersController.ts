import { IFindOneOrAllUsersUseCase } from "@application/usecases/v1/users/findOneOrAllUsers/IFindOneOrAllUsersUseCase";
import { Controller } from "@infra/http/protocols/controller";
import { HttpRequest, HttpResponse } from "@infra/http/protocols/http";
import { HttpResponses } from "@infra/http/protocols/httpResponses";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindOneOrAllUsersController implements Controller {
    constructor(
        @inject('IFindOneOrAllUsersUseCase')
        private findOneOrAllUsersUseCase: IFindOneOrAllUsersUseCase
    ) { }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const id = httpRequest.params.userId as string
        const response = await this.findOneOrAllUsersUseCase.execute({ id })
        return HttpResponses.ok(response)
    }
}