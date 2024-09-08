import { RouterAdapter } from "@infra/http/adapters/RouterAdapter"
import { CreateUserControllerBody } from "@infra/http/controllers/v1/users/createUser/DTOs/CreateUserQueryDTO"
import { FindOneOrAllUsersControllerParams } from "@infra/http/controllers/v1/users/findOneOrAllUsers/DTOs/FindOneOrAllUsersControllerParams"
import { UpdateUserControllerBody } from "@infra/http/controllers/v1/users/updateUser/DTOs/UpdateUserControllerBody"
import { UpdateUserControllerParams } from "@infra/http/controllers/v1/users/updateUser/DTOs/UpdateUserControllerParams"
import { MiddlewareUtils } from "@infra/http/middlewares/utils/MiddlewareUtils"
import { Controller } from "@infra/http/protocols/controller"
import { Router } from "express"
import { container } from "tsyringe"

export default (router: Router): void => {
    const findOneOrAllUsersController = container.resolve<Controller>('FindOneOrAllUsersController')
    const createUserController = container.resolve<Controller>('CreateUserController')
    const updateUserController = container.resolve<Controller>('UpdateUserController')

    router.get(
        '/v1/users/:userId?',
        MiddlewareUtils.validateRequest({
            params: FindOneOrAllUsersControllerParams
        }),
        RouterAdapter.adapt(findOneOrAllUsersController)
    )

    router.post(
        '/v1/users',
        MiddlewareUtils.validateRequest({
            body: CreateUserControllerBody
        }),
        RouterAdapter.adapt(createUserController)
    )

    router.patch(
        '/v1/users/:userId',
        MiddlewareUtils.validateRequest({
            body: UpdateUserControllerBody,
            params: UpdateUserControllerParams
        }),
        RouterAdapter.adapt(updateUserController)
    )
}