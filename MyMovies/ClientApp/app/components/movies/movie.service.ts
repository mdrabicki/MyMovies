import { Http , Headers } from "@angular/http";
import{Movie,MovieDetailsResponse} from './movie';
import {Injectable} from '@angular/core';
import {Actor,ActorInMovie} from '../actors/actor';
import{Observable} from 'rxjs';


@Injectable()
export class MovieService{
    private headers:Headers = new Headers({'content-type': 'application/json'});
    private apiAdress:string = "api/movies/";
     constructor(
        private http: Http
    ) { };
    
    addMovie(movie:Movie):Promise<Movie>{
        return this.http
        .post(this.apiAdress,movie,this.headers)
        .toPromise()
        .then(res=>res.json());
    }
    getMovies():Promise<Movie[]>{
        return this.http
        .get(this.apiAdress)
        .toPromise()
        .then(result => result.json());
    }
    deleteMovie(id:number):Promise<void>{
        return this.http
        .delete(this.apiAdress +`${id}`)
        .toPromise()
        .then(()=>null);
    }
    getMovie(id:number):Promise<MovieDetailsResponse>{
        return this.http.get(this.apiAdress +`${id}`)
        .toPromise()
        .then(response => response.json());
    }
    search(actorName:string):Observable<Actor[]>{
        return this.http
        .get('api/actors/' +`${actorName}`)
        .map(res=>res.json());
        
    }
    addActorToMovie(movieId:number,actorId:number,role:string):Promise<void>{
        let data = {"actorId": actorId,"role":role};
        let body=JSON.stringify(data);
        return this.http
        .post(this.apiAdress +`${movieId}`,body,{headers: this.headers})
        .toPromise()
        .then(()=>null)
    }
}
