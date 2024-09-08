import { IUsecase } from "@application/usecases/IUseCase";
import { DeleteUserUseCaseRequest, DeleteUserUseCaseResponse } from "./TDeleteUserUseCase";

export interface IDeleteUserUseCase extends IUsecase<DeleteUserUseCaseRequest, DeleteUserUseCaseResponse> { }