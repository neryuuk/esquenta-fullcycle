import { ValidationPipe } from '@nestjs/common'
import { HttpAdapterHost, NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { PrismaExceptionFilter } from '@categories/exception-filters/prisma.exception-filter'
import { CatchAllExceptionFilter } from '@categories/exception-filters/catch-all.exception-filter'
import { InvalidRelationExceptionFilter } from '@categories/exception-filters/invalid-relation.exception-filter'
import { IllegalCharactersExceptionFilter } from '@videos/exception-filters/illegal-characters.exception-filter'
import { CustomLogger } from './custom.logger'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

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

  SwaggerModule.setup(
    'docs',
    app,
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('NestJS 10 - Video API')
        .setDescription('Esquenta Fullcycle NestJS 10')
        .setVersion('1.0.0')
        .build(),
    ),
  )

  await app.listen(process.env.PORT)
}

bootstrap()
