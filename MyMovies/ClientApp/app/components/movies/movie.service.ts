import { Http , Headers } from "@angular/http";
import{Movie} from './movie';
import {Injectable} from '@angular/core';


@Injectable()
export class MovieService{
    private headers:Headers = new Headers({'content-type': 'application/json'});
     constructor(
        private http: Http
    ) { };
    
    addMovie(movie:Movie):Promise<Movie>{
        console.log(movie);

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
}
