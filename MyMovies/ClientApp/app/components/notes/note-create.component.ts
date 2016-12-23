import {Component,Input} from '@angular/core';
import {Location} from '@angular/common';
import {Params,ActivatedRoute} from "@angular/router"

import {NoteService} from './note.service';
import {Note} from './note';


@Component({
    selector: "note-create",
    template: require('./note-create.component.html'),
    providers: [NoteService]

})

export class NoteCreateComponent{
    note:Note;
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
        .then(()=>this.goBack());
    }
    goBack():void{
        this.location.back();
    }
}