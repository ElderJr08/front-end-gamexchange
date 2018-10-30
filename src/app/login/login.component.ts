import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'gx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login:LoginService) {
    
  }
  
  ngOnInit() {
    
  }

  Logar(user, pass){
    this.login.Logar(user, pass);
  }

  
}
