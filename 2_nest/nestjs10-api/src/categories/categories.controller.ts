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
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Category } from './entities/category.entity'

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Create new category' })
  @ApiBody({ type: Category })
  @ApiResponse({
    status: 201,
    description: 'Category created',
    type: Category,
  })
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto)
  }

  @ApiOperation({ summary: 'Fetch all categories' })
  @ApiResponse({
    status: 200,
    description: 'List all categories',
    type: Category,
    isArray: true,
  })
  @Get()
  findAll() {
    return this.categoriesService.findAll()
  }

  @ApiOperation({ summary: 'Find category by id' })
  @ApiResponse({
    status: 200,
    description: 'Find category by id',
    type: Category,
  })
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
