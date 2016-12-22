import {Component, OnInit} from "@angular/core";
import {Movie} from "./movie";
import {Location} from "@angular/common";
import {Params, ActivatedRoute} from '@angular/router'
import {MovieService} from './movie.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'movie-detail',
    template: require('./movie-detail.component.html'),
    providers:[MovieService],

})

export class MovieDetailComponent implements OnInit{
    movie:Movie;
    constructor(
        private location:Location,
        private route:ActivatedRoute,
        private movieService:MovieService,

    ){};

    goBack():void{
        this.location.back();
    }

    ngOnInit():void{
        console.log("init dziala");
        
        this.route.params
        .switchMap((params:Params)=>this
        .movieService.getMovie(+params['id']))
        .subscribe(movie => this.movie=movie);
}

}