
import { IUsecase } from "@application/usecases/IUseCase";
import { TCreateUserUseCaseRequest, TCreateUserUseCaseResponse } from "./CreateUserUseCaseDTO";

export interface ICreateUserUseCase extends IUsecase<TCreateUserUseCaseRequest, TCreateUserUseCaseResponse> { }