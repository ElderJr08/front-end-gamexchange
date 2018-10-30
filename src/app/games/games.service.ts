import { Injectable } from '@angular/core';
import { MY_API } from '../app.api';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class GameService {
    constructor(private http: HttpClient,
                private router: Router){}

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
      return ["name", "description", "platform"];//"isAvailable", "insertDate", "tradeDate"
    }
    
    Cadastrar(titulo,categ,desc,plat){
      
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
        platform:plat,
        categoryId:categ
      }, options);
    }

    atribuirGame(gameId){
      let router = this.router;
      let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Cache-Control', 'no-cache')
      .set('Authorization', localStorage['token']);
    
      let options = {
        headers: httpHeaders      
      }

      return this.http.post(`${MY_API}/user/game`, {gameId: gameId}, options)
            .subscribe(function(res){
              console.log(res);       
              if(res === null){
              
                document.getElementById("btn-modalOpen").click();
                setTimeout(function(){
                  location.replace('')
               },1000)
              }else{
                alert('Jogo não cadastrado!');
              }      
              //router.navigate(['']);
            });
    }
    
}