import { PartialType } from '@nestjs/mapped-types'
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator'

export class CreateVideoDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  title: string

  @IsOptional()
  @IsString()
  description?: string | null

  @Min(1)
  @IsInt()
  @IsNotEmpty()
  category_id: number
}

export class CreateVideoWithUploadDto extends CreateVideoDto {}

export class UpdateVideoDto extends PartialType(CreateVideoDto) {}