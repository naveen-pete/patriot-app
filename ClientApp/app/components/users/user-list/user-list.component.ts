import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private readonly PAGE_SIZE = 3;

  queryResult: any = {};
  query: any = {
    pageSize: this.PAGE_SIZE
  };
  columns = [
    { title: 'Id' },
    { title: 'Full Name', key: 'fullName', isSortable: true },
    { title: 'User Name', key: 'userName', isSortable: true },
    { title: 'Title', key: 'contactName', isSortable: true },
    { title: 'No. of Jobs', key: 'noOfJobs', isSortable: true },
    {}
  ];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.populateUsers();
  }

  populateUsers() {
    this.queryResult = this.userService.getUsers(this.query);
  }

  sortBy(columnName) {
    if(this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending;
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }

    this.populateUsers();
  }

  onPageChange(page) {
    this.query.page = page;
    this.populateUsers();
  }
}
