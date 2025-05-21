import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class GoogleDto {
    @IsEmail({},{message: "Некоректний емейл"})
    @IsNotEmpty({message: "Поле не може бути пустим"})
    @IsString({message: "Поле має бути рядком"})
    email: string;

    @IsNotEmpty({message: "Поле не може бути пустим"})
    @IsString({message: "Поле має бути текстом"})
    provider: string
}