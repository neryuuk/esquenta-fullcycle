import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  // Container de serviços
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {}
}
