import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Game} from "./game/game.model"
import { MY_API, ANOTHER_API } from '../app.api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GameService {
    constructor(private http: Http){}

    games(): Observable<Game[]>{
      console.log(this.http.get(`${ANOTHER_API}/games`).pipe(
        map(response => response.json())));
      return this.http.get(`${ANOTHER_API}/games`).pipe(
        map(response => response.json()));

    }
    getColumns(): string[]{//para as colunas
      return ["name", "description", "platform", "isAvailable", "insertDate", "tradeDate"];
    }
    
}