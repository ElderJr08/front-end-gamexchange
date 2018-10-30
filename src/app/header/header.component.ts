import { Component} from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'gx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  isUserLoggedIn: boolean;
  NickName: string;

  constructor(private login: LoginService) { 
    this.login.isUserLoggedIn.subscribe( value => {
      console.log(value);
      if(value){
        this.isUserLoggedIn = JSON.parse(localStorage.getItem('logado'));
        this.NickName = localStorage.getItem('nickname');
      }else{
        this.isUserLoggedIn = false;
      }
      
  });
}
Exit(){
  localStorage.clear();
  location.reload();
}
// ngOnInit() {
  //   this.isUserLoggedIn = JSON.parse(localStorage.getItem('logado'));
  //   console.log(this.isUserLoggedIn);
  // }

}

  