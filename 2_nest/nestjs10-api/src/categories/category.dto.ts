import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string

  @IsOptional()
  @IsString()
  description?: string | null
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
