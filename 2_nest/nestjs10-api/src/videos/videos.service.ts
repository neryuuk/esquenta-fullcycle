import { Injectable } from '@nestjs/common'
import { CreateVideoDto, UpdateVideoDto } from '@videos/video.dto'
import { InvalidRelationError } from '@categories/errors/invalid-relation.error'
import { PrismaService } from '../prisma/prisma/prisma.service'
import { createReadStream } from 'fs'
import { join } from 'path'
import { IllegalCharactersError } from './errors/illegal-characters.error'

@Injectable()
export class VideosService {
  constructor(private prismaService: PrismaService) {}

  async create(createVideoDto: CreateVideoDto & { file: Express.Multer.File }) {
    const count = await this.prismaService.category.count({
      where: { id: createVideoDto.category_id },
    })

    if (count === 0) {
      throw new InvalidRelationError('Category not found')
    }

    return this.prismaService.video.create({
      data: {
        title: createVideoDto.title,
        description: createVideoDto.description,
        category_id: createVideoDto.category_id,
        file_path: createVideoDto.file.path,
      },
    })
  }

  findAll() {
    return this.prismaService.video.findMany({
      include: { category: true },
    })
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

  file(file: string) {
    if (!file.match(/^[a-z0-9_]+\.[a-z0-9]{3}$/)) {
      throw new IllegalCharactersError('Illegal filename')
    }

    return createReadStream(join(process.cwd(), 'upload', 'videos', file))
  }
}
