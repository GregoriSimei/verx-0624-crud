import { IsDateString, IsDefined, IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateUserControllerBody {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    password: string

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    name: string

    @IsDefined()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsDefined()
    @IsNotEmpty()
    @IsDateString()
    birthday: string
}