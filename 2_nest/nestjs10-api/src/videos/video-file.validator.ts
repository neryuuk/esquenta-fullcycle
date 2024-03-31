import { FileValidator } from '@nestjs/common'
import { IFile } from '@nestjs/common/pipes/file/interfaces'

export class VideoFileValidator extends FileValidator {
  constructor() {
    super({
      maxSize: 1024 * 1024 * 200,
      mimetype: 'video/mp4',
    })
  }

  isValid(file?: IFile): boolean | Promise<boolean> {
    return (
      file.mimetype === this.validationOptions.mimetype &&
      file.size < this.validationOptions.maxSize
    )
  }

  buildErrorMessage(file: any): string {
    if (!file) {
      return 'File is required'
    }

    if (file.mimetype !== this.validationOptions.mimetype) {
      return `File must be ${this.validationOptions.mimetype}\nReceived ${file.mimetype}`
    }

    if (file.size > this.validationOptions.maxSize) {
      return `File must be smaller than ${(this.validationOptions.maxSize / 1024 / 1024).toFixed(2)}mb\nReceived ${(file.size / 1024 / 1024).toFixed(2)}mb`
    }
  }
}
