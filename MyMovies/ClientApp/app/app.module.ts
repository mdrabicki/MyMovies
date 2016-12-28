import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import {NotesComponent} from './components/notes/notes.component';
import {NoteCreateComponent} from './components/notes/note-create.component';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieDetailComponent} from './components/movies/movie-detail.component';
import {ActorsComponent} from './components/actors/actors.component';
import {ActorCreateComponent} from './components/actors/actor-create.component';
import {ActorDetailComponent} from './components/actors/actor-detail.component';
import * as mdc from 'material-components-web';

//import {card as MCDcard} from '@material/card';


@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        NotesComponent,
        NoteCreateComponent,
        MoviesComponent,
        MovieDetailComponent,
        ActorsComponent,
        ActorCreateComponent,
        ActorDetailComponent,

    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'notes',component:NotesComponent},
            { path: 'note-create',component:NoteCreateComponent},
            { path: 'movies',component:MoviesComponent},
            { path: 'movie-detail/:id',component:MovieDetailComponent},
            { path: 'actors',component:ActorsComponent},
            { path: 'actors-create',component:ActorCreateComponent },
            { path: 'actor-detail/:id',component:ActorDetailComponent},
            { path: '**', redirectTo: 'home' }
        ]),
        FormsModule,
    ]
})
export class AppModule {
}
