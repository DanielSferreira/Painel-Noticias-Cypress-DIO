import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'; 

import { LoginFormComponent } from './components/login-form/login-form.component';
import { ContainerComponent } from './container/container.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginFormComponent,
    ContainerComponent,
    MenuComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule
    
  ]
})
export class LoginModule { }
