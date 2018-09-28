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
    MinhasTrocasComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
