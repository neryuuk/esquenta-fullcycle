import { IsNotEmpty, IsString, MaxLength, isInt } from 'class-validator'

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

  @isInt()
  @IsNotEmpty()
  category_id: int
}
