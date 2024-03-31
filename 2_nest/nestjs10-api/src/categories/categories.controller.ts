import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Param,
  Patch,
} from '@nestjs/common'
import { CategoriesService } from '@categories/categories.service'
import { CreateCategoryDto, UpdateCategoryDto } from '@categories/category.dto'

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto)
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(+id, updateCategoryDto)
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    this.categoriesService.remove(+id)
    return
  }
}
