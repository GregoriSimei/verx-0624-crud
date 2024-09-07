import { IsOptional, IsString, IsUUID } from "class-validator";

export class FindOneOrAllUsersControllerParams {
    @IsUUID()
    @IsOptional()
    userId?: string
}