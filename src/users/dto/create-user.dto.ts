import { IsBoolean, IsEmail, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;

  @IsString()
  password: string;
}
