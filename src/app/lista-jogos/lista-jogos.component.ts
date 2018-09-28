import { Component, OnInit } from '@angular/core';
import { GameService } from '../games/games.service';
import {Game} from "../games/game/game.model"

@Component({
  selector: 'gx-lista-jogos',
  templateUrl: './lista-jogos.component.html',
  styleUrls: ['./lista-jogos.component.less']
})
export class ListaJogosComponent implements OnInit {

  games: Game[];
  columns: string[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.games()
    .subscribe(games => this.games = games);

    this.columns = this.gameService.getColumns(); 
  }

}
