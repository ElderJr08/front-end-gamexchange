import { Injectable } from '@angular/core';
import { MY_API } from '../app.api';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class GameService {
    constructor(private http: HttpClient){}

    games(){
      let httpHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Cache-Control', 'no-cache')
        .set('Authorization', localStorage['token']);
      
        let options = {
          headers: httpHeaders
        }

      return this.http.get(`${MY_API}/user/games`,options);

    }
    getColumns(): string[]{//para as colunas
      return ["name", "description", "platform", "isAvailable", "insertDate", "tradeDate"];
    }
    
    Cadastrar(titulo,categ,desc){
      let httpHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Cache-Control', 'no-cache')
        .set('Authorization', localStorage['token']);
      
        let options = {
          headers: httpHeaders      
        }
       
      return this.http.post(`${MY_API}/games`,{
        name:titulo,
        description:desc,
        platform:"Ps4",
        categoryId:categ
      }, options);
    }

    atribuirGame(gameId){
      let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Cache-Control', 'no-cache')
      .set('Authorization', localStorage['token']);
    
      let options = {
        headers: httpHeaders      
      }

      this.http.post(`${MY_API}/user/game`, {gameId: gameId}, options)
            .subscribe(res => console.log(res));
    }
    
}