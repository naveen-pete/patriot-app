import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/forkJoin';

import { KeyValuePair } from './../../models/key-value-pair';
import { Vehicle } from "../../models/vehicle";
import { VehicleService } from './../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  private readonly PAGE_SIZE = 3;

  makes: KeyValuePair[];
  queryResult: any = {};
  // Client-side filtering
  // allVehicles: Vehicle[]; 
  query: any = {
    pageSize: this.PAGE_SIZE
  };
  columns = [
    { title: 'Id' },
    { title: 'Make', key: 'make', isSortable: true },
    { title: 'Model', key: 'model', isSortable: true },
    { title: 'Contact Name', key: 'contactName', isSortable: true },
    {}
  ];
  
  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleService.getMakes()
      .subscribe(makes => this.makes = makes);

    this.populateVehicles();
  }

  private populateVehicles() {
    // Client-side filtering
    // this.vehicleService.getVehicles(this.query)
    //   .subscribe(vehicles => this.vehicles = this.allVehicles = vehicles);

    this.vehicleService.getVehicles(this.query)
      .subscribe(result => this.queryResult = result);
  }

  // Client-side filtering
  // onFilterChange() {
  //   var vehicles = this.allVehicles;

  //   if(this.query.makeId)
  //     vehicles = vehicles.filter(v => v.make.id == this.query.makeId);

  //   this.vehicles = vehicles;
  // }

  onFilterChange() {
    this.query.page = 1;
    this.populateVehicles();
  }

  resetFilter() {
    this.query = {
      page: 1,
      pageSize: this.PAGE_SIZE
    };
    this.populateVehicles();
  }

  sortBy(columnName) {
    if(this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending;
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }

    this.populateVehicles();
  }

  onPageChange(page) {
    this.query.page = page;
    this.populateVehicles();
  }
}
