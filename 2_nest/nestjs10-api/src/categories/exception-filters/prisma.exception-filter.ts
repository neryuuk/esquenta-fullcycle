import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    console.log(exception.code, exception.name)

    const context = host.switchToHttp()
    const response = context.getResponse()
    const request = context.getRequest()

    if (exception.code === 'P2025') {
      return response.status(404).json({
        statusCode: 404,
        message: `Item id '${request.params.id}' not found`,
      })
    }

    return response.status(500).json({
      statusCode: 500,
      message: 'Internal Server Error',
    })
  }
}
