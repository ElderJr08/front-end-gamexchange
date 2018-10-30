import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaJogosComponent } from './lista-jogos/lista-jogos.component';
import { MinhasTrocasComponent } from './minhas-trocas/minhas-trocas.component';
import { ActionComponent } from './category/action/action.component';
import { AdventureComponent } from './category/adventure/adventure.component';
import { RpgComponent } from './category/rpg/rpg.component';
import { SportsComponent } from './category/sports/sports.component';
import { OthersComponent } from './category/others/others.component';


export const ROUTES: Routes =[
    {path:'', component: HomeComponent},
    {path:'lista-jogos', component: ListaJogosComponent},
    {path:'minhas-trocas', component: MinhasTrocasComponent},
    {path:'action', component: ActionComponent},
    {path:'adventure', component: AdventureComponent},
    {path:'rpg', component: RpgComponent},
    {path:'sports', component: SportsComponent},
    {path:'others', component: OthersComponent}


]
