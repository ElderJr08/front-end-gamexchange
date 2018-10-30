import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { AdventureService } from './adventure.service';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'gx-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.less']
})
export class AdventureComponent implements OnInit {
  isUserLoggedIn:boolean;
  adventures: Category;
  columns: string[];

  constructor(private adventureService: AdventureService,
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
    
    this.adventureService.action()
    .subscribe(adventures => this.adventures = adventures);
    this.columns = this.adventureService.getColumns(); 
  }

}
