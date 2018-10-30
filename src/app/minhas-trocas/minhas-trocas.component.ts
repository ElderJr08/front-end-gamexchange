import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gx-minhas-trocas',
  templateUrl: './minhas-trocas.component.html',
  styleUrls: ['./minhas-trocas.component.less']
})
export class MinhasTrocasComponent implements OnInit {
  isUserLoggedIn:boolean;
  constructor() { }

  ngOnInit() {
    this.isUserLoggedIn = JSON.parse(localStorage.getItem('logado'))
  }

}
