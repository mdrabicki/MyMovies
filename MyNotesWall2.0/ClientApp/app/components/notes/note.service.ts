import {Injectable} from '@angular/core';
import {Note} from './note';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NoteService {
    private notesURL = '/api/Note';
    private header=new Headers({'Content-Type': 'application/json'});
    // private notesURL = '/api/SampleData/WeatherForecasts';
    constructor(
        private http: Http
    ) { };

    getNotes(): Promise<Note[]> {
        console.log("w serwisie");
        return this.http.get(this.notesURL+'/getNotes')
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError); 
    };
    
    addNote(note:Note):Promise<Note>{
        console.log("dzialam");
        note.title="test title";
        note.content="tez test";
        return this.http
        .post(this.notesURL+'/addNote'
            ,JSON.stringify(note)
            ,{headers:this.header})
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    };




    handleError(error:any):Promise<any>{
        console.error("blad wystapil",error);
        return Promise.reject(error.message || error);
    };
}