import { Component, OnInit } from '@angular/core';
import { User } from './user/user.model';

@Component({
  selector: 'gx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

  users: User[] = [
    {
      id: 1,
      nome: "Guido José",
      data: "10/05/2018",
      jogoInteresse:"Naruto ultimate ninja storm"
      },
      {
        id: 2,
        nome: "Guido Hugo",
        data: "10/05/2018",
        jogoInteresse:"Naruto ultimate ninja storm"
      },
      {
        id: 3,
        nome: "Guido Thiago",
        data: "10/05/2018",
        jogoInteresse:"Naruto ultimate ninja storm"
      }
  ]; 

  constructor() { }

  ngOnInit() {
  }

}
