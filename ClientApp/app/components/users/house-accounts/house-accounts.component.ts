import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service";

@Component({
  selector: 'app-house-accounts',
  templateUrl: './house-accounts.component.html',
  styleUrls: ['./house-accounts.component.css']
})
export class HouseAccountsComponent implements OnInit {
  private readonly PAGE_SIZE = 3;

  userId = 1;
  queryResult: any = {};
  query: any = {
    pageSize: this.PAGE_SIZE
  };
  columns = [
    { title: 'Company', key: 'company', isSortable: true },
    { title: 'Contact', key: 'contact', isSortable: true },
    { title: 'House Avg Jobs', key: 'houseAvgJobs', isSortable: true },
    { title: 'Sales Month 1', key: 'salesMonth1', isSortable: true },
    { title: 'Sales Month 2', key: 'salesMonth2', isSortable: true },
    { title: 'Sales Month 3', key: 'salesMonth3', isSortable: true },
    { title: 'Target Jobs', key: 'targetJobs', isSortable: true },
    { title: 'Performance %', key: 'performancePct', isSortable: true }
  ];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.populateHouseAccounts();
  }

  populateHouseAccounts() {
    this.queryResult = this.userService.getHouseAccounts(this.userId, this.query);
  }

  sortBy(columnName) {
    if(this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending;
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }

    this.populateHouseAccounts();
  }

  onPageChange(page) {
    this.query.page = page;
    this.populateHouseAccounts();
  }
}
