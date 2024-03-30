import { Test, TestingModule } from '@nestjs/testing'
import { VideosController } from '@videos/videos.controller'
import { VideosService } from '@videos/videos.service'

describe('VideosController', () => {
  let controller: VideosController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideosController],
      providers: [VideosService],
    }).compile()

    controller = module.get<VideosController>(VideosController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
