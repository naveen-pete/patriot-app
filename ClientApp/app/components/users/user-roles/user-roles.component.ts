import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service";

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {
  userId = 5;
  roles: any[];
  userRoles: number[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.roles = this.userService.getRoles();
    this.userRoles = this.userService.getUserRoles(this.userId);
  }

}
