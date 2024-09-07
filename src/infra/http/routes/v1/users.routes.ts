import { RouterAdapter } from "@infra/http/adapters/RouterAdapter"
import { FindOneOrAllUsersControllerParams } from "@infra/http/controllers/v1/users/findOneOrAllUsers/DTOs/FindOneOrAllUsersControllerParams"
import { MiddlewareUtils } from "@infra/http/middlewares/utils/MiddlewareUtils"
import { Controller } from "@infra/http/protocols/controller"
import { Router } from "express"
import { container } from "tsyringe"

export default (router: Router): void => {
    const findOneOrAllUsersController = container.resolve<Controller>('FindOneOrAllUsersController')

    router.get(
        '/v1/users/:userId?',
        MiddlewareUtils.validateRequest({
            params: FindOneOrAllUsersControllerParams
        }),
        RouterAdapter.adapt(findOneOrAllUsersController)
    )
}