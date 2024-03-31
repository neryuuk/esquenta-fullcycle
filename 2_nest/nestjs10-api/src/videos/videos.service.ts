import { Injectable } from '@nestjs/common'
import { CreateVideoDto, UpdateVideoDto } from '@videos/video.dto'
import { InvalidRelationError } from '@categories/errors/invalid-relation.error'
import { PrismaService } from '../prisma/prisma/prisma.service'

@Injectable()
export class VideosService {
  constructor(private prismaService: PrismaService) {}

  async create(createVideoDto: CreateVideoDto) {
    const count = await this.prismaService.category.count({
      where: { id: createVideoDto.category_id },
    })

    if (count === 0) {
      throw new InvalidRelationError('Category not found')
    }

    return this.prismaService.video.create({
      data: {
        ...createVideoDto,
        file_path: 'foo/bar/video.mp4',
      },
    })
  }

  findAll() {
    return this.prismaService.video.findMany()
  }

  findOne(id: number) {
    return this.prismaService.video.findUniqueOrThrow({ where: { id } })
  }

  update(id: number, updateVideoDto: UpdateVideoDto) {
    return this.prismaService.video.update({
      where: { id },
      data: updateVideoDto,
    })
  }

  remove(id: number) {
    return this.prismaService.video.delete({ where: { id } })
  }
}
