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
            this.movie=new Movie(),
            this.movie.id=det.id,
            this.movie.title=det.title,
            this.movie.year=det.year
        })
    }

    ngOnInit():void{
        
        this.route.params
        .subscribe((params:Params)=>
        this.getMovieDetails(params['id']))


        this.actors = this.searchTerm
        .debounceTime(600)
        .distinctUntilChanged()
        .switchMap(term=> term
        ? this.movieService.search(term)
        : Observable.of<Actor[]>([])
        )
    }
    addActorToMovie(actor:Actor,role:string){
        var newActor = new ActorInMovie();
        newActor.firstName = actor.firstName;
        newActor.id = actor.id;
        newActor.lastName = actor.lastName;
        newActor.role = role;
        
    
        this.movieService.addActorToMovie(this.movie.id ,actor.id,role)
        .then(()=>this.actorsInMovie.push(newActor))
           

        
        
    }
    search(actorName:string):void{
        this.searchTerm.next(actorName)
    }
        

}