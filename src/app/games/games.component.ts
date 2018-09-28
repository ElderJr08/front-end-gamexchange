import { Component, OnInit } from '@angular/core';
import { Game } from './game/game.model';
import { GameService } from './games.service';

@Component({
  selector: 'gx-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.less']
})
export class GamesComponent implements OnInit {

  games:Game[];
  
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.games()
    .subscribe(games => this.games = games);
  }

}
