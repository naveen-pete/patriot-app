import { Routes, RouterModule } from "@angular/router";

import { VehicleFormComponent } from "./components/vehicle-form/vehicle-form.component";
import { VehicleListComponent } from "./components/vehicle-list/vehicle-list.component";
import { UserListComponent } from "./components/users/user-list/user-list.component";
import { HomeComponent } from "./components/home/home.component";
import { UserComponent } from "./components/users/user/user.component";
import { USER_ROUTES } from './components/users/user.routes';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'vehicles/new', component: VehicleFormComponent },
    { path: 'vehicles/:id', component: VehicleFormComponent },
    { path: 'vehicles', component: VehicleListComponent },
    { path: 'users', component: UserListComponent },
    { path: 'users/:id', component: UserComponent, children: USER_ROUTES },
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
