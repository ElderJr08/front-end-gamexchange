import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { MainTableComponent } from './main-table/main-table.component';
import { UserComponent } from './users/user/user.component';
import { InterestTableComponent } from './main-table/tables/interest-table/interest-table.component';
import { UsersComponent } from './users/users.component';
import { ListaJogosComponent } from './lista-jogos/lista-jogos.component';
import { MinhasTrocasComponent } from './minhas-trocas/minhas-trocas.component';
import { UsersService } from './users/users.services';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './games/game/game.component';
import { GameService } from './games/games.service';
import { ActionComponent } from './category/action/action.component';
import { AdventureComponent } from './category/adventure/adventure.component';
import { ActionService } from './category/action/action.service';
import { AdventureService } from './category/adventure/adventure.service';
import { SportsComponent } from './category/sports/sports.component';
import { RpgComponent } from './category/rpg/rpg.component';
import { OthersComponent } from './category/others/others.component';
import { RpgService } from './category/rpg/rpg.services';
import { SportsService } from './category/sports/sports.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MainTableComponent,
    UserComponent,
    InterestTableComponent,
    UsersComponent,
    ListaJogosComponent,
    MinhasTrocasComponent,
    GamesComponent,
    GameComponent,
    ActionComponent,
    AdventureComponent,
    SportsComponent,
    RpgComponent,
    OthersComponent
  ],
  imports:[
 CommonModule,
NgtUniversalModule,
 
    
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [UsersService, GameService, ActionService, AdventureService,RpgService,SportsService],
})
export class AppModule { }
