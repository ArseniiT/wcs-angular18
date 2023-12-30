import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './pages/admin/admin.component';
import { IsAdmin } from './core/isAdmin.guard';
import { IsConnected } from './core/isConnected.guard';
import { DeniedComponent } from './pages/denied/denied.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [IsConnected]},
    {path: 'admin', component: AdminComponent, canActivate: [IsAdmin]},
    {path: 'denied', component: DeniedComponent},
    {path: '**', component: HomeComponent},
];
