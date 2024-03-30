import { Injectable } from '@nestjs/common'
import { CreateVideoDto } from '@videos/dto/create-video.dto'
import { UpdateVideoDto } from '@videos/dto/update-video.dto'
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
      data: { ...updateVideoDto },
    })
    return `This action updates a #${id} video`
  }

  remove(id: number) {
    return `This action removes a #${id} video`
  }
}
