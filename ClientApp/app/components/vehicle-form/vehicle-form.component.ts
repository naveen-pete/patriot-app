import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/Observable/forkJoin';
import { ToastyService } from "ng2-toasty";
import * as _ from 'underscore';

import { Vehicle } from './../../models/vehicle';
import { SaveVehicle } from './../../models/save-vehicle';
import { VehicleService } from './../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  pageTitle = "New Vehicle";
  makes: any[];
  models: any[];
  features: any;

  vehicle: SaveVehicle = {
    id: 0,
    makeId: 0,
    modelId: 0,
    isRegistered: false,
    features: [],
    contact: {
      name: '',
      phone: '',
      email: ''
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService,
    private toastyService: ToastyService
  ) {
    route.params.subscribe(p => {
      this.vehicle.id = +p['id'];

      if(this.vehicle.id)
        this.pageTitle = "Update Vehicle";
    });
  }

  ngOnInit() {
    var sources = [
      this.vehicleService.getMakes(),
      this.vehicleService.getFeatures()
    ];

    if(this.vehicle.id)
      sources.push(this.vehicleService.getVehicle(this.vehicle.id));

    Observable.forkJoin(sources).subscribe(
      data => {
        this.makes = data[0];
        this.features = data[1];

        if(this.vehicle.id)
          this.setVehicle(data[2]);
          this.populateModels();
      },
      err => {
        if(err.status == 404)
          this.router.navigate(['/home']);
      }
    );
  }

  private setVehicle(v: Vehicle) {
    this.vehicle.id = v.id;
    this.vehicle.makeId = v.make.id;
    this.vehicle.modelId = v.model.id;
    this.vehicle.isRegistered = v.isRegistered;
    this.vehicle.contact = v.contact;
    this.vehicle.features = _.pluck(v.features, 'id');
  }

  onMakeChange() {
    this.populateModels();
    delete this.vehicle.modelId;
  }

  private populateModels() {
    var selectedMake = this.makes.find(m => m.id == this.vehicle.makeId);
    this.models = selectedMake ? selectedMake.models : [];
  }

  onFeatureToggle(featureId, $event) {
    if($event.target.checked) {
      this.vehicle.features.push(featureId);
    } else {
      var index = this.vehicle.features.indexOf(featureId);
      this.vehicle.features.splice(index, 1);
    }
  }

  submit() {
    if(this.vehicle.id) {
      this.vehicleService.update(this.vehicle)
        .subscribe(x => {
          this.toastyService.success({
            title: 'Success',
            msg: 'The vehicle was successfully updated.',
            theme: 'bootstrap',
            showClose: true,
            timeout: 5000
          });
          console.log('Vehicle updated successfully!');
          console.log(x);
        });
    } else {
      this.vehicle.id = 0;
      this.vehicleService.create(this.vehicle)
        .subscribe(x => {
          console.log('Vehicle created successfully!');
          console.log(x);
          this.router.navigate(['/vehicles']);
        });
    }
  }

  delete() {
    if(confirm('Are you sure?')) {
      this.vehicleService.delete(this.vehicle.id)
        .subscribe(x => {
          console.log('Vehicle deleted successfully!');
          console.log(x);
          this.router.navigate(['/vehicles']);
        });
    }
  }
}
