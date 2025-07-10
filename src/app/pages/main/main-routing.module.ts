import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main.component';
import { routes as route } from '../../shared/routes/routes';

const routes: Routes = [
    {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: route.dashboard, pathMatch: 'full' },
      { path: route.dashboard, component: DashboardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
