import { Component, OnInit } from '@angular/core';
import {Game} from "../../games/game/game.model"
import { ActionService } from './action.service';
import { Category } from '../category.model';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'gx-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.less']
})
export class ActionComponent implements OnInit {
  isUserLoggedIn:boolean;
  actions: Category;
  columns: string[];

  constructor(private actionService: ActionService,
              private login: LoginService){
                this.login.isUserLoggedIn.subscribe( value => {
                  if(value){
                    this.isUserLoggedIn = JSON.parse(localStorage.getItem('logado'));
                  }else{
                    this.isUserLoggedIn = false;
                  }
                    
                });
              }
  ngOnInit() {
    
    this.actionService.action()
    .subscribe(actions => this.actions = actions);
    this.columns = this.actionService.getColumns(); 
  }

}
