import {Component,OnInit} from '@angular/core'
import {ActorService} from './actor.service'
import {Actor} from './actor'
import{ActivatedRoute,Params} from '@angular/router'
@Component({
    selector: 'actor-detail',
    template: require('./actor-detail.component.html'),
    providers:[ActorService],
})

export class ActorDetailComponent implements OnInit{
    actor:Actor;
    constructor(
        private actorService:ActorService, 
        private route:ActivatedRoute,
    )
    {}

    getActorDetail(id:number){
       this.actorService.getActorDetail(id)
       .then(actor => this.actor=actor)
   //    .then(()=>console.log(this.actor));
        
    }
    ngOnInit(){
        this.route.params
        .subscribe((params:Params)=>
        this.getActorDetail(+params['id']));
        
        
    }

}