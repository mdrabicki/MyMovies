import {Component,Input,EventEmitter,Output} from '@angular/core';
import {Location} from '@angular/common';
import {Params,ActivatedRoute} from "@angular/router"

import {NoteService} from './note.service';
import {Note,MockedNote} from './note';


@Component({
    selector: "note-create",
    template: require('./note-create.component.html'),
    providers: [NoteService],
})


export class NoteCreateComponent{
    note:Note;
    @Output() onNoteAdd = new EventEmitter<Note>()
    @Input() movieId=0;

    constructor(
        private noteService:NoteService,
        private location:Location,
        private route:ActivatedRoute,
    ){
        this.note=new Note();
    }

    addNote():void{       
        this.noteService.addNote(this.note,this.movieId)
        .then(res=>this.onNoteAdd.emit(res))
       // .then(()=>this.goBack());
    }
    goBack():void{
        this.location.back();
    }
}