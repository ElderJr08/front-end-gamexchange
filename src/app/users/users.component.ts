import { Component, OnInit } from '@angular/core';
import { User } from './user/user.model';
import { UsersService } from './users.services';


@Component({
  selector: 'gx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {  

  users: User[];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.users()
    .subscribe(users => this.users = users);
  }

}
