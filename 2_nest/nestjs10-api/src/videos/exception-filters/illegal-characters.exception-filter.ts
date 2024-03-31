import { ArgumentsHost, Catch } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import { IllegalCharactersError } from '@videos/errors/illegal-characters.error'

@Catch(IllegalCharactersError)
export class IllegalCharactersExceptionFilter extends BaseExceptionFilter {
  catch(exception: IllegalCharactersError, host: ArgumentsHost) {
    const context = host.switchToHttp()
    const response = context.getResponse()

    return response.status(422).json({
      statusCode: 422,
      message: exception.message,
    })
  }
}
