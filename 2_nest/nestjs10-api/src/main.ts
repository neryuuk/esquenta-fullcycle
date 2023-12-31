import { ValidationPipe } from '@nestjs/common'
import { HttpAdapterHost, NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { PrismaExceptionFilter } from './categories/exception-filters/prisma.exception-filter'
import { CatchAllExceptionFilter } from './categories/exception-filters/catch-all.exception-filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalFilters(
    new CatchAllExceptionFilter(app.get(HttpAdapterHost).httpAdapter),
    new PrismaExceptionFilter(),
  )

  app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: 422 }))

  await app.listen(process.env.PORT)
}

bootstrap()
