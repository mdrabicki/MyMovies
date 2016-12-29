import {Component, OnInit} from '@angular/core';
import {Movie} from './movie';
import {MovieService} from './movie.service'
@Component({
    selector: 'movies',
    template:  require('./movies.component.html'),
    styles: [require('./movies.component.css')],
    providers: [MovieService],

})

export class MoviesComponent implements OnInit{
    movies:Movie[];
    movie: Movie;
    constructor(
       private movieService:MovieService,
    ){
        this.movie=new Movie();
    }
    addMovie():void{
        this.movieService
        .addMovie(this.movie)
        .then(movie =>this.movies.push(movie));
    }
    ngOnInit():void{
        this.getMovies();
    }
    getMovies():void{
         this.movieService
        .getMovies()
        .then(movies=>this.movies=movies)
        .catch();
    }
    deleteMovie(movie:Movie):void{
        this.movieService.deleteMovie(movie.id)
        .then(movies=>this.movies=this.movies.filter(m=> m!==movie));
    }

}