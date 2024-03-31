import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class Video {
  @ApiProperty()
  public title: string

  @ApiPropertyOptional()
  public description?: string

  @ApiProperty()
  public category_id: number

  @ApiProperty({ type: 'string', format: 'binary' })
  public file: string
}
