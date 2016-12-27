import {Component,OnInit} from '@angular/core';
import {ActorService} from './actor.service'
import{Actor} from './actor';
import{ActorCreateComponent} from './actor-create.component';


@Component({
    selector:'actors',
    template: require('./actors.component.html'),
    providers: [ActorService],
})

export class ActorsComponent implements OnInit{
    actors:Actor[];
    constructor(
        private actorService:ActorService,
    ){}

    ngOnInit(){
        this.getActors();
    }

    getActors():void{
        this.actorService
        .getAllActors()
        .then(actors=>this.actors=actors);
    }
    onActorAdd(actor:Actor){
        this.actors.push(actor);
    }
}