import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {User} from "./user/user.model"
import { MY_API } from '../app.api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
    constructor(private http: Http){}

    users(): Observable<User[]>{
      return this.http.get(`${MY_API}/game`).pipe(
        map(response => response.json()));

    }
}