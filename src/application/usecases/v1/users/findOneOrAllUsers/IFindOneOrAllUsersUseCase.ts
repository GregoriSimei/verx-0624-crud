import { IUsecase } from "@application/usecases/IUseCase";
import { TFindOneOrAllUsersUseCaseRequest, TFindOneOrAllUsersUseCaseResponse } from "./TFindOneOrAllUsersUseCase";

export interface IFindOneOrAllUsersUseCase extends IUsecase<TFindOneOrAllUsersUseCaseRequest, TFindOneOrAllUsersUseCaseResponse> { }