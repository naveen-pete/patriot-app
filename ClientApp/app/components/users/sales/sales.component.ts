import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  private readonly PAGE_SIZE = 3;

  userId = 1;
  queryResult: any = {};
  query: any = {
    pageSize: this.PAGE_SIZE
  };
  columns = [
    { title: 'Company', key: 'company', isSortable: true },
    { title: 'Contact', key: 'contact', isSortable: true },
    { title: 'Amount', key: 'amount', isSortable: true }
  ];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.populateSales();
  }

  populateSales() {
    this.queryResult = this.userService.getSales(this.userId, this.query);
  }

  sortBy(columnName) {
    if(this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending;
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }

    this.populateSales();
  }

  onPageChange(page) {
    this.query.page = page;
    this.populateSales();
  }
}
