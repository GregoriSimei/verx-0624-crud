
import { IUsecase } from "@application/usecases/IUseCase";
import { TCreateUserUseCaseRequest, TCreateUserUseCaseResponse } from "./TCreateUserUseCase";

export interface ICreateUserUseCase extends IUsecase<TCreateUserUseCaseRequest, TCreateUserUseCaseResponse> { }