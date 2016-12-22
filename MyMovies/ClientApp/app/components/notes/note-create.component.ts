import {Component,Input} from '@angular/core';
import {Location} from '@angular/common';

import {NoteService} from './note.service';
import {Note} from './note';


@Component({
    selector: "note-create",
    template: require('./note-create.component.html'),
    providers: [NoteService]

})

export class NoteCreateComponent{
    note:Note;

    constructor(
        private noteService:NoteService,
        private location:Location,
    ){
        this.note=new Note();
    }

    addNote():void{            
        this.noteService.addNote(this.note)
        .then(()=>this.goBack());
    }
    goBack():void{
        this.location.back();
    }
}