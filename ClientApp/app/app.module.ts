import { ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastyModule } from 'ng2-toasty';
import { UniversalModule } from 'angular2-universal';

import { routing } from './app.routing';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleService } from './services/vehicle.service';
import { AppErrorHandler } from './app.error-handler';
import { PaginationComponent } from './components/shared/pagination.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserService } from './services/user.service';
import { UserComponent } from './components/users/user/user.component';
import { UserNavComponent } from './components/users/user-nav/user-nav.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { UserRolesComponent } from './components/users/user-roles/user-roles.component';
import { UserClientsComponent } from './components/users/user-clients/user-clients.component';
import { SalesComponent } from './components/users/sales/sales.component';
import { HouseAccountsComponent } from './components/users/house-accounts/house-accounts.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        VehicleFormComponent,
        VehicleListComponent,
        PaginationComponent,
        UserListComponent,
        UserComponent,
        UserNavComponent,
        UserFormComponent,
        UserRolesComponent,
        UserClientsComponent,
        SalesComponent,
        HouseAccountsComponent
    ],
    imports: [
        FormsModule,
        ToastyModule.forRoot(),
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        routing
    ],
    providers: [
        { provide: ErrorHandler, useClass: AppErrorHandler },
        VehicleService,
        UserService
    ]
})
export class AppModule {
}
