import {Injectable} from "@angular/core";
import{Http,Headers} from "@angular/http";

import{Actor} from "./actor";

@Injectable()
export class ActorService{
    private actorURL="actors/";
    private headers:Headers = new Headers({'content-type': 'application/json'});
    constructor(
        private http:Http
        ){}
        
    addActor(actor:Actor):Promise<Actor>{
        return this.http
        .post(this.actorURL,actor,this.headers)
        .toPromise()
        .then(res=>res.json());

    }

    getAllActors():Promise<Actor[]>{
        return this.http
        .get(this.actorURL)
        .toPromise()
        .then(res => res.json())
    }

    getActorDetail(id:number):Promise<Actor>{
        return this.http.get(this.actorURL + `${id}`)
        .toPromise()
        .then(res=>res.json());
    }
}