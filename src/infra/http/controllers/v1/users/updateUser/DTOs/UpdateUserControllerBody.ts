import { IsDateString, IsDefined, IsOptional, IsString } from "class-validator"

export class UpdateUserControllerBody {
    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsDateString()
    birthday?: string
}