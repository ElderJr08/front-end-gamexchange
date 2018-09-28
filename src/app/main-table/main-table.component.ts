import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.services';
import { User } from '../users/user/user.model';


@Component({
  selector: 'gx-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.less']
})
export class MainTableComponent implements OnInit {
  users: User[];
  columns: string[];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.users()
    .subscribe(users => this.users = users);

    this.columns = this.userService.getColumns(); 
  }

}
