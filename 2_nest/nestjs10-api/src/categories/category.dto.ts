import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  public name: string

  @IsOptional()
  @IsString()
  public description?: string | null
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
