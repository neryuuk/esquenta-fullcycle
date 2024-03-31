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
  Res,
} from '@nestjs/common'
import { VideosService } from '@videos/videos.service'
import { CreateVideoDto, UpdateVideoDto } from '@videos/video.dto'
import { VideoFileValidator } from './video-file.validator'
import { FileInterceptor } from '@nestjs/platform-express'
import { VideoSerializer } from './video.serializer'

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
  async findAll() {
    const videos = await this.videosService.findAll()
    return videos.map((video) => new VideoSerializer(video))
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

  @Get('file/:file')
  async file(@Param('file') file: string, @Res() res: Response) {
    const filestream = this.videosService.file(file)
    await filestream.pipe(res, { end: true })
  }
}
