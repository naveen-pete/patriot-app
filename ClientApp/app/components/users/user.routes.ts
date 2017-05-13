import { Routes } from '@angular/router';

import { UserFormComponent } from './user-form/user-form.component';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { UserClientsComponent } from './user-clients/user-clients.component';
import { SalesComponent } from './sales/sales.component';
import { HouseAccountsComponent } from './house-accounts/house-accounts.component';

export const USER_ROUTES = [
    { path: 'userDetails', component: UserFormComponent },
    { path: 'userRoles', component: UserRolesComponent },
    { path: 'userClients', component: UserClientsComponent },
    { path: 'sales', component: SalesComponent },
    { path: 'houseAccounts', component: HouseAccountsComponent },
    { path: '', redirectTo: 'userDetails', pathMatch: 'full' }
];
