/* eslint-disable prettier/prettier */
import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Post,
    Param,
    Patch,
    Delete
  } from '@nestjs/common';
import { NoteService } from './note.service';
import { yupCreateNoteInput } from 'src/yup/notes'
import { CreateNoteInput} from './createNote.dto'
import { UpdateNoteInput} from './updateNote.dto'

@Controller()
export class NoteController {
    constructor(private readonly noteService: NoteService) {}

    // List all
    @Get('/notes')
    listAll(){
        return this.noteService.listAll()
    }

    // Get one note
    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.noteService.getOne(id)
    }

    // List archived
    @Get('/archived/:state')
    getNotesByState(@Param('state') state: boolean){
        return this.noteService.getNotesByState(state)
    }

    // Create note
    @Post('/add')
    async createNote(@Body() input: CreateNoteInput) {
        // Use yup to verify
        const isValidInput = yupCreateNoteInput.isValidSync(input);
        if (!isValidInput) throw new BadRequestException('Invalid input :( Try again')
        return this.noteService.createNote(input)
    }

    // Update note
    @Patch(':id')
    updateNoteById(@Param('id') id: string, @Body() input: UpdateNoteInput) {
        return this.noteService.updateNote(input, id)
    }

    // Delete note
    @Delete(':id')
    deleteNoteById(@Param('id') id: string) {
        return this.noteService.deleteNote(id)
    }
}
