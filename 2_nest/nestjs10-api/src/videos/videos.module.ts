import { Module } from '@nestjs/common'
import { VideosService } from '@videos/videos.service'
import { VideosController } from '@videos/videos.controller'

@Module({
  controllers: [VideosController],
  providers: [VideosService],
})
export class VideosModule {}
