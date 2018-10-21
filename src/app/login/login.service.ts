import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Category} from "../category.model"
import { MY_API, ANOTHER_API } from '../../app.api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {
    constructor(private http: Http){}

    Logar(user,pass){
      return this.http.post(`http://devgamexchange-env.3euhabra2u.sa-east-1.elasticbeanstalk.com/login`,
      {
          username: user,
          password: pass,
      })
      .subscribe(
          (data:any[]=>{
            console.log(data);
          })
      )
    }


}