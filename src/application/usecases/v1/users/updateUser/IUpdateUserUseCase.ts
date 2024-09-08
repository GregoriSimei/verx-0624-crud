
import { IUsecase } from "@application/usecases/IUseCase";
import { TUpdateUserUseCaseRequest, TUpdateUserUseCaseResponse } from "./TUpdateUserUseCase";

export interface IUpdateUserUseCase extends IUsecase<TUpdateUserUseCaseRequest, TUpdateUserUseCaseResponse> { }
