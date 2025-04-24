import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ServiceRequestComponent } from './pages/service-request/service-request.component';
import { IncidentRequestComponent } from './pages/incident-request/incident-request.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
  {
    path: 'service-request',
    component: ServiceRequestComponent,
  },
  {
    path: 'incident-request',
    component: IncidentRequestComponent,
  },
];
