import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Category} from "../category.model"
import { MY_API, ANOTHER_API } from '../../app.api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RpgService {
    constructor(private http: Http){}

    action(): Observable<Category[]>{
      console.log(this.http.get(`${MY_API}/category/3`).pipe(
        map(response => response.json())));
      return this.http.get(`${MY_API}/category/3`).pipe(
        map(response => response.json()));

    }
    getColumns(): string[]{//para as colunas
      return ["name","description","platform"];
    }
    
}