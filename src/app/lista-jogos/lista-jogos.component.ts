import { Component, OnInit } from '@angular/core';
import { GameService } from '../games/games.service';
import {Game} from "../games/game/game.model"

@Component({
  selector: 'gx-lista-jogos',
  templateUrl: './lista-jogos.component.html',
  styleUrls: ['./lista-jogos.component.less']
})
export class ListaJogosComponent implements OnInit {

  games: any;
  columns: string[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.games()
    .subscribe(games => this.games = games);

    this.columns = this.gameService.getColumns(); 
  }
  Cadastrar(titulo,categ,desc){
    if(titulo === "" && categ === "Selecione" && desc === ""){
      alert('Por favor, preencha os campos Título, Categoria e Descrição corretamente');
    }else if(titulo === ""){
      alert('Por favor, preencha os campos Título');
    }else if(categ === "Selecione"){
      alert('Por favor, preencha o campo Categoria corretamente');
    }else if(desc === ""){
      alert('Por favor, preencha o campo Descrição corretamente');
    }else{
      console.log(titulo,categ,desc);
      this.gameService.Cadastrar(titulo,categ,desc)
      .subscribe(res => {
        console.log('ID: '+res['id']);
        this.gameService.atribuirGame(res['id']);
      })
      
      
    }
    
  }

}
