import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main.component';
import { SharedModule } from '../../shared/shared.module';
import { SharedComponentsModule } from '../../components/shared-components.module';


@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    SharedComponentsModule,
  ]
})
export class MainModule { }
