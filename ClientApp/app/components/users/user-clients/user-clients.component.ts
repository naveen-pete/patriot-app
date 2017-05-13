import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service";

@Component({
  selector: 'app-user-clients',
  templateUrl: './user-clients.component.html',
  styleUrls: ['./user-clients.component.css']
})
export class UserClientsComponent implements OnInit {
  private readonly PAGE_SIZE = 3;

  userId = 1;
  queryResult: any = {};
  query: any = {
    pageSize: this.PAGE_SIZE
  };
  columns = [
    { title: 'Company', key: 'company', isSortable: true },
    { title: 'Contact', key: 'contact', isSortable: true },
    { title: 'Source', key: 'source', isSortable: true },
    { title: 'Email', key: 'email', isSortable: true },
    { title: 'Phone', key: 'phone', isSortable: true },
    { title: 'City', key: 'city', isSortable: true },
    { title: 'State', key: 'state', isSortable: true }
  ];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.populateClients();
  }

  populateClients() {
    this.queryResult = this.userService.getUserClients(this.userId, this.query);
  }

  sortBy(columnName) {
    if(this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending;
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }

    this.populateClients();
  }

  onPageChange(page) {
    this.query.page = page;
    this.populateClients();
  }
}
