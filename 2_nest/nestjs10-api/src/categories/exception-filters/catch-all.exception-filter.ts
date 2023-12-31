import { ArgumentsHost, Catch } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'

@Catch()
export class CatchAllExceptionFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    console.log(exception.code, exception.name)
    return super.catch(exception, host)
  }
}
