import {Component,EventEmitter,Output} from '@angular/core';
import {Actor} from './actor';
import {ActorService} from './actor.service';

@Component({
    selector:'actor-create',
    template: require('./actor-create.component.html'),
    providers: [ActorService],
})

export class ActorCreateComponent{
    actor:Actor;
    @Output() onActorAdd = new EventEmitter<Actor>();
    constructor(
        private actorService:ActorService,
       
    ){
         this.actor=new Actor();
    }

    addActor(actor:Actor)
    {
        this.actorService.addActor(actor)
        .then(res=>this.onActorAdd.emit(res));
    }
    
}