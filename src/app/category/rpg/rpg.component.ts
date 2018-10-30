import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { RpgService } from './rpg.services';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'gx-rpg',
  templateUrl: './rpg.component.html',
  styleUrls: ['./rpg.component.less']
})
export class RpgComponent implements OnInit {
  isUserLoggedIn:boolean;
  rpgs: Category;
  columns: string[];

  constructor(private rpgService: RpgService,
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
    
    this.rpgService.action()
    .subscribe(rpgs => this.rpgs = rpgs);
    this.columns = this.rpgService.getColumns(); 
  }

}
