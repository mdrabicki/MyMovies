import {Component, OnInit,Input} from '@angular/core';
import {Router} from '@angular/router';


import {NoteService} from './note.service';
import {Note} from './note';

@Component({
    // moduleId: module.id,
    selector: 'notes',
    template: require('./notes.component.html'),
    styles: [require('./notes.component.css')],
    providers:[NoteService],

})


    export class NotesComponent implements OnInit{
    public notes :Note[];
    @Input() public movieId; 

    constructor(
        private noteService:NoteService,
        private router:Router,
    ){}

    getNotes():void{
        this.noteService.getNotes(this.movieId)
        .then(notes => this.notes=notes)
        .catch();
        
        
    };
    gotoNoteCreate():void{
        this.router.navigate(['note-create/'])
    };


     ngOnInit():void{
         this.getNotes();
     }
  

}

