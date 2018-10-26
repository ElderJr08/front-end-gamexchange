import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'gx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean;

  constructor() { }

  ngOnInit() {
    this.isLogged = localStorage['logado'];
    console.log(this.isLogged);
  }

}
