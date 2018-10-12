import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {User} from "./user/user.model"
import { MY_API, ANOTHER_API } from '../app.api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
    constructor(private http: Http){}

    users(): Observable<User[]>{
      console.log(this.http.get(`${MY_API}/users`).pipe(
        map(response => response.json())));
      return this.http.get(`${MY_API}/users`).pipe(
        map(response => response.json()));

    }
    getColumns(): string[]{//para as colunas
      return ["nome", "data", "jogoInteresse"];
    }
}