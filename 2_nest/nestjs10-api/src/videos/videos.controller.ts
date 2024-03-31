import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  ParseFilePipe,
  UseInterceptors,
} from '@nestjs/common'
import { VideosService } from '@videos/videos.service'
import { CreateVideoDto, UpdateVideoDto } from '@videos/video.dto'
import { VideoFileValidator } from './video-file.validator'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post()
  create(
    @Body() createVideoDto: CreateVideoDto,
    @UploadedFile(
      new ParseFilePipe({
        errorHttpStatusCode: 400,
        validators: [new VideoFileValidator()],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.videosService.create({ ...createVideoDto, file })
  }

  @Get()
  findAll() {
    return this.videosService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videosService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto) {
    return this.videosService.update(+id, updateVideoDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videosService.remove(+id)
  }
}
