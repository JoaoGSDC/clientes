import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ClientsComponent } from '../pages/register/clients/clients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterGroupComponent } from '../pages/register/register-group/register-group.component';
import { ConsultClientsComponent } from '../pages/consult/consult-clients/consult-clients.component';
import { ConsultGroupsComponent } from '../pages/consult/consult-groups/consult-groups.component';

@NgModule({
  declarations: [MainComponent, ClientsComponent, RegisterGroupComponent, ConsultClientsComponent, ConsultGroupsComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MainModule { }
