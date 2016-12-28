import { Http , Headers } from "@angular/http";
import{Movie} from './movie';
import {Injectable} from '@angular/core';
import {Actor} from '../actors/actor';
import{Observable} from 'rxjs';


@Injectable()
export class MovieService{
    private headers:Headers = new Headers({'content-type': 'application/json'});
     constructor(
        private http: Http
    ) { };
    
    addMovie(movie:Movie):Promise<Movie>{
        return this.http
        .post('movies',movie,this.headers)
        .toPromise()
        .then(res=>res.json());
    }
    getMovies():Promise<Movie[]>{
        return this.http
        .get('movies')
        .toPromise()
        .then(result => result.json());
    }
    deleteMovie(id:number):Promise<void>{
        return this.http
        .delete('movies/'+`${id}`)
        .toPromise()
        .then(()=>null);
    }
    getMovie(id:number):Promise<Movie>{
        return this.http.get('movies/'+`${id}`)
        .toPromise()
        .then(response => response.json());
    }
    search(actorName:string):Observable<Actor[]>{
        return this.http
        .get('actors/' + `${actorName}`)
        .map(res=>res.json());
        
    }
    addActorToMovie(movieId:number,actorId:number):Promise<void>{
        return this.http
        .post('movies/'+`${movieId}`,actorId,this.headers)
        .toPromise()
        .then(()=>null)
    }
}
