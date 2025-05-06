import { IsBoolean, IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Type } from "class-transformer";

export class LoginDto {
    // @IsEmail({}, { message: 'El email no es válido.' })
    // email?: string;

    // @IsNotEmpty({ message: 'La contraseña es obligatoria.' })
    // @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres.' })
    // password?: string;

    // @Type(() => Boolean)
    // @IsBoolean({ message: 'El campo remember debe ser booleano.' })
    // remember?: boolean;
    //@IsEmail({}, { message: 'El email no es válido.' })
    public email!: string ;
    public password!: string ;

    
}
