import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'

export class CreateVideoDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  title: string

  @IsOptional()
  @IsString()
  description?: string | null

  @IsNotEmpty()
  @IsString()
  file_path: string

  @IsInt()
  @IsNotEmpty()
  category_id: Number
}
