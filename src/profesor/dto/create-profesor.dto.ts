import { IsNotEmpty, IsString } from "class-validator";

export class CreateProfesorDto {


    @IsNotEmpty()
    @IsString()
    nombre_Profesor: string;


    @IsNotEmpty()
    @IsString()
    apellido1_Profesor: string;


    @IsNotEmpty()
    @IsString()
    apellido2_Profesor: string;


}
