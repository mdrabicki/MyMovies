export class Note {
    id:number;
    rate: number;
    comment: string;

    constructor(){
        this.rate=0;
        this.comment="";
    }
}   

export class MockedNote{
    note:Note;
    constructor(){
        this.note=new Note();
            
        this.note.id=100;
        this.note.comment="NIkusiowe";
        this.note.rate=5;
        
    }
}