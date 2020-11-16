import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './pages/login/container/container.component';

const routes: Routes = [
  {path: '', component: ContainerComponent},
  {path: 'home', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
