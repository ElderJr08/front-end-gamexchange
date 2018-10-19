import { Component, OnInit } from '@angular/core';
import {Game} from "../../games/game/game.model"
import { ActionService } from './action.service';
import { Category } from '../category.model';

@Component({
  selector: 'gx-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.less']
})
export class ActionComponent implements OnInit {
  actions: Category;
  columns: string[];

  constructor(private actionService: ActionService) { }

  ngOnInit() {
    
    this.actionService.action()
    .subscribe(actions => this.actions = actions);
    this.columns = this.actionService.getColumns(); 
  }

}
