import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma';
import { NoteModule } from './modules/notes/note.module';
import { CategoryModule } from './modules/categories/category.module';

@Module({
  imports: [PrismaModule, NoteModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
