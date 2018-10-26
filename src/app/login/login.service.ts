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
        let httpHeaders = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Cache-Control', 'no-cache')
        .set('Authorization', 'Basic ' + btoa(user+':'+pass));

        localStorage.setItem('token', 'Basic ' + btoa(user+':'+pass));

        let options = {
            headers: httpHeaders
       }; 

      return this.http.post(`${MY_API}/login`, null, options).subscribe(function(res){
          if(res === null){
              console.log('ok');
              console.log(localStorage);
          }
      })
    }


}