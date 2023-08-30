/* eslint-disable prettier/prettier */
import { Prisma } from '.prisma/client';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma';
import { CreateCategoryInput } from './createCategory.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async getCategories() {
    return await this.prismaService.category.findMany();
  }

  async getCategoryById(categoryId: string){
    return await this.prismaService.category.findUnique({
      where: {
        id: categoryId
      }
    })
  }

  async createCategory(newCategory: CreateCategoryInput) {
    try {
      const category = await this.prismaService.category.create({
        data: {
          name: newCategory.name,
        },
      });
      return category;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('This category already exists!');
        }
      }
      throw error;
    }
  }
}
