import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger'

export class Category {
  @ApiResponseProperty()
  public id: string

  @ApiProperty()
  public name: string

  @ApiProperty()
  public description?: string | null
}
