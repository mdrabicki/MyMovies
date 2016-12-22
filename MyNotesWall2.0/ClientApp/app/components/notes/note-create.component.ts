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
    

    constructor(
        private noteService:NoteService,
        private location:Location,
    ){
    }

    addNote():void{
        let note = new Note();
            
        this.noteService.addNote(note)
        .then(()=>this.goBack());
    }
    goBack():void{
        this.location.back();
    }
}