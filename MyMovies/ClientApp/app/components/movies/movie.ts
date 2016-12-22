export class Movie{
    id:number;
    title:string;
    year: number;

    constructor(title:string,year: number){
        this.title=title;
        this.year=year;
    }
}