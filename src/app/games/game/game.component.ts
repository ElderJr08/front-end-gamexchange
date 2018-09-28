import { Component, OnInit, Input } from '@angular/core';
import { Game } from './game.model';

@Component({
  selector: 'gx-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit {

  @Input() game: Game;
  constructor() { }

  ngOnInit() {
  }

}
