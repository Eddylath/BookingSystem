import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginPageComponent } from '../login-page/login-page.component';

export const routes: Routes = [
    {path: '', component: LoginPageComponent, pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent}
];
