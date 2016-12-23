import {Injectable} from '@angular/core';
import {Note} from './note';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NoteService {
    private notesURL = 'review/';
    private header=new Headers({'Content-Type': 'application/json'});

    constructor(
        private http: Http
    ) { };

    getNotes(): Promise<Note[]> {
        console.log("w serwisie");
        return this.http.get(this.notesURL)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError); 
    };
    
    addNote(note:Note,movieId:number):Promise<void>{     
        return this.http
        .post(this.notesURL+`${movieId}`
            ,JSON.stringify(note)
            ,{headers:this.header})
        .toPromise()
        .then(()=>null)
        .catch(this.handleError);
    };

 handleError(error:any):Promise<any>{
        console.error("blad wystapil",error);
        return Promise.reject(error.message || error);
    };
}