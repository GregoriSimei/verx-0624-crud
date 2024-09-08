import { IsDefined, IsNotEmpty, IsUUID } from "class-validator";

export class DeleteUserControllerParams {
    @IsUUID()
    @IsDefined()
    @IsNotEmpty()
    userId: string
}