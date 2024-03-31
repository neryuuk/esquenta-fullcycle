import { ValidationPipe } from '@nestjs/common'
import { HttpAdapterHost, NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { PrismaExceptionFilter } from '@categories/exception-filters/prisma.exception-filter'
import { CatchAllExceptionFilter } from '@categories/exception-filters/catch-all.exception-filter'
import { InvalidRelationExceptionFilter } from '@categories/exception-filters/invalid-relation.exception-filter'
import { IllegalCharactersExceptionFilter } from '@videos/exception-filters/illegal-characters.exception-filter'
import { CustomLogger } from './custom.logger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    forceCloseConnections: true,
    logger: new CustomLogger(),
  })

  app.useGlobalFilters(
    new CatchAllExceptionFilter(app.get(HttpAdapterHost).httpAdapter),
    new PrismaExceptionFilter(),
    new InvalidRelationExceptionFilter(),
    new IllegalCharactersExceptionFilter(),
  )

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: 422,
      transform: true,
    }),
  )

  await app.listen(process.env.PORT)
}

bootstrap()
