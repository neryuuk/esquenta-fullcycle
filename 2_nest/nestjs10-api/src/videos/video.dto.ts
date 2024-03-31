import { PartialType } from '@nestjs/mapped-types'
import { Type } from 'class-transformer'
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
  @Type(() => Number)
  category_id: number
}

export class CreateVideoWithUploadDto extends CreateVideoDto {}

export class UpdateVideoDto extends PartialType(CreateVideoDto) {}
