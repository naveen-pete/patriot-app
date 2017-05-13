import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  titles: any[];
  states: any[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.titles = this.userService.getTitles();
    this.states = this.userService.getStates();
  }

}
