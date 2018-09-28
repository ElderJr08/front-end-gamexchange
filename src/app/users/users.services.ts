import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {User} from "./user/user.model"
import { MY_API } from '../app.api';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
    constructor(private http: Http){}

    users(): Observable<User[]>{
      return this.http.get(`${MY_API}/user/1`).map(response => response.json());

    }
}