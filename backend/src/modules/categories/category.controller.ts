/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { CategoryService } from './category.service'
import { CreateCategoryInput } from './createCategory.dto'

@Controller('categories')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Get()
    getCategories(){
        return this.categoryService.getCategories()
    }

    @Get(':id')
    getCategorybyId(@Param('id') id: string){
        return this.categoryService.getCategoryById(id)
    }

    @Post()
    createCategory(@Body() newCategory: CreateCategoryInput){
        return this.categoryService.createCategory(newCategory)
    }
}
