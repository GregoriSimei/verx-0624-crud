import { IsDefined, IsNotEmpty, IsUUID } from "class-validator";

export class UpdateUserControllerParams {
    @IsUUID()
    @IsDefined()
    @IsNotEmpty()
    userId: string
}