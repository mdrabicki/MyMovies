import {Component, OnInit} from "@angular/core";
import {Movie} from "./movie";
import {Actor} from "../actors/actor";
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
    actors:Observable<Actor[]>;
    private searchTerm = new Subject<string>();
    constructor(
        private location:Location,
        private route:ActivatedRoute,
        private movieService:MovieService,

    ){};

    goBack():void{
        console.log(this.movie)
        this.location.back();
    }

    ngOnInit():void{
        this.route.params 
        .switchMap((params:Params)=>this
        .movieService.getMovie(+params['id']))
        .subscribe(movie => this.movie=movie)  

        this.actors = this.searchTerm
        .debounceTime(600)
        .distinctUntilChanged()
        .switchMap(term=> term
        ? this.movieService.search(term)
        : Observable.of<Actor[]>([])
        )
    }
    addActorToMovie(actor:Actor){
        
        this.movieService.addActorToMovie(this.movie.id ,actor.id);
        
    }
    search(actorName:string):void{
        this.searchTerm.next(actorName)
    }
        

}