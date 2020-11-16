import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { LateralViewComponent } from './components/lateral-view/lateral-view.component';
import { CentralViewComponent } from './components/central-view/central-view.component';
import { DashboardRoutingModule } from './dashboard-routing.module';


import {MatDividerModule} from '@angular/material/divider'; 
import {MatButtonModule} from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card';
import { CardFaciliterComponent } from './components/card-faciliter/card-faciliter.component';
import { CongigsComponent } from './components/congigs/congigs.component';


@NgModule({
  declarations: [
    ContainerComponent,
    LateralViewComponent,
    CentralViewComponent,
    CardFaciliterComponent,
    CongigsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class DashboardModule { }
