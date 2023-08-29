import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { PrismaExceptionFilter } from './categories/exception-filters/prisma.exception-filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalFilters(new PrismaExceptionFilter())

  await app.listen(process.env.PORT)
}

bootstrap()
