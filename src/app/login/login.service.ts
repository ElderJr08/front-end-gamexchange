import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { MY_API, ANOTHER_API } from '../app.api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient){}

    Logar(user,pass){

        let payload = {
            username: user,
            password: pass
        }

        let httpHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Cache-Control', 'no-cache');

        let options = {
            headers: httpHeaders
       }; 

      return this.http.post(`${MY_API}/login`, payload, options).subscribe(function(res){
          console.log(res);
      })
    }


}