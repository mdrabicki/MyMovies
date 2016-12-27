import {Injectable,OnDestroy} from '@angular/core';
import {Note} from './note';
import {Http, Headers} from '@angular/http';
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NoteService implements OnDestroy {
    private notesURL = 'review/';
    private header=new Headers({'Content-Type': 'application/json'});
    public notesSource = new Subject<Note>();

    constructor(
        private http: Http
    ) {
        
     };

    getNotes(movieId:number): Promise<Note[]> {
        return this.http.get(this.notesURL+`${movieId}`)
        .toPromise()
        .then(response => response.json()); 
    };
    
    addNote(note:Note,movieId:number):Promise<Note>{ 
        console.log("Dodanie notki");
        
        return this.http
        .post(this.notesURL+`${movieId}`
            ,JSON.stringify(note)
            ,{headers:this.header})
            .toPromise()
            .then(res=>res.json());
        
    };

 handleError(error:any):Promise<any>{
        console.error("blad wystapil",error);
        return Promise.reject(error.message || error);
    };

    deleteComment(movieId:number,commentId:number):Promise<void>{
        return this.http
        .delete(this.notesURL+`${movieId}/${commentId}`)
        .toPromise()
        .then(()=>null)
    }
    ngOnDestroy():void{
        console.log("nie ma mnie");
        
    }
}