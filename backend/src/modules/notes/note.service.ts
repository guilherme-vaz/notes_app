/* eslint-disable prettier/prettier */
import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class NoteService {
  constructor(private readonly prismaService: PrismaService) {}

  // List all notes
 async listAll() {
    return await this.prismaService.note.findMany()
}

// Get one note
async getOne(noteId: string) {
    return await this.prismaService.note.findUnique({
        where: {
            id: noteId,
        }
    })
}

// List by isArchive 
async getNotesByState(state: boolean){
    return await this.prismaService.note.findMany({
        where: {
            isArchived: true
        }
    })
}

// Creating note
async createNote(input: Prisma.NoteCreateInput) {
    return await this.prismaService.note.create({
        data: input
    })
}

// Updating note
async updateNote(input: Prisma.NoteUpdateInput, id: string) {
    return this.prismaService.note.update({
        data: input,
        where: {
            id,
        },
    })
}

//Deleting note
async deleteNote(id: string){
    return this.prismaService.note.delete({
        where: {
            id,
        },
    })
}

}
