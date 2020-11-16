import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CentralViewComponent } from './components/central-view/central-view.component';
import { CongigsComponent } from './components/congigs/congigs.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {
    path: '', component: ContainerComponent,
    children: [
      { path: '', component: CentralViewComponent },
      { path: 'config', component: CongigsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,
    ReactiveFormsModule,]
})
export class DashboardRoutingModule { }
