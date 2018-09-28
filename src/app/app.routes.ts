import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaJogosComponent } from './lista-jogos/lista-jogos.component';
import { MinhasTrocasComponent } from './minhas-trocas/minhas-trocas.component';

export const ROUTES: Routes =[
    {path:'', component: HomeComponent},
    {path:'lista-jogos', component: ListaJogosComponent},
    {path:'minhas-trocas', component: MinhasTrocasComponent}


]
