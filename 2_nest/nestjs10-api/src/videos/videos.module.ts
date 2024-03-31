import { Module } from '@nestjs/common'
import { VideosService } from '@videos/videos.service'
import { VideosController } from '@videos/videos.controller'
import { MulterModule } from '@nestjs/platform-express'
import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'upload/videos')
  },
  filename: (_, file, cb) => {
    cb(
      null,
      [
        `${Date.now()}_${(Math.random() * 100000).toFixed(0)}`,
        path.extname(file.originalname),
      ].join(''),
    )
  },
})

@Module({
  imports: [MulterModule.register({ storage })],
  controllers: [VideosController],
  providers: [VideosService],
})
export class VideosModule {}
