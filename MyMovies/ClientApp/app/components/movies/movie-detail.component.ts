import {Component, OnInit} from "@angular/core";
import {Movie, MovieDetailsResponse} from "./movie";
import {Actor,ActorInMovie} from "../actors/actor";
import {Location} from "@angular/common";
import {Params, ActivatedRoute} from '@angular/router'
import {MovieService} from './movie.service';
import {Observable,Subject} from 'rxjs';


import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'movie-detail',
    template: require('./movie-detail.component.html'),
    providers:[MovieService],

})

export class MovieDetailComponent implements OnInit{
    movie:Movie;
    actorsInMovie:ActorInMovie[];
    actors:Observable<Actor[]>;
    movieDetailsResponse:MovieDetailsResponse;
    private searchTerm = new Subject<string>();
    constructor(
        private location:Location,
        private route:ActivatedRoute,
        private movieService:MovieService,

    ){};

    goBack():void{
        this.location.back();
    }

    getMovieDetails(id:number){
        this.movieService.getMovie(id)
        .then(res=>this.movieDetailsResponse=res)
        .then(det => 
        {
            this.actorsInMovie=det.actors,
            this.movie=det.movie
        })
    }

    ngOnInit():void{
        
        this.route.params
        .subscribe(params => this.getMovieDetails(+params['id']));
        // .switchMap((params:Params)=>this.getMovieDetails(params['id']));
        // .movieService.getMovie()
        // .subscribe(movie => this.movie=movie)  

        this.actors = this.searchTerm
        .debounceTime(600)
        .distinctUntilChanged()
        .switchMap(term=> term
        ? this.movieService.search(term)
        : Observable.of<Actor[]>([])
        )
    }
    addActorToMovie(actor:Actor,role:string){
        
        this.movieService.addActorToMovie(this.movie.id ,actor.id,role);
        
    }
    search(actorName:string):void{
        this.searchTerm.next(actorName)
    }
        

}