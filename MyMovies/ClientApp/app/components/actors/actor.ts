export class Actor{
    id:number;
    firstName:string;
    lastName:string;
    birthday:Date;
    roles:Role[];
}

export class ActorInMovie{
    id:number;
    firstName:string;
    lastName:string;
    role:string;
}

export class Role{
    id:number;
    year:number;
    roleName:string;
    movieTitle:string;
    movieId:number;                                    
}