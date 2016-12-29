import{Actor,ActorInMovie} from '../actors/actor';

export class Movie{
    id:number;
    title:string;
    year: number;

    constructor(title:string,year: number){
        this.title=title;
        this.year=year;
    }
}

export class MovieDetailsResponse
{
    movie:Movie;
    actors:ActorInMovie[];
}