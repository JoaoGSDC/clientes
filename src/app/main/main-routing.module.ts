import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { ClientsComponent } from '../pages/register/clients/clients.component';
import { RegisterGroupComponent } from '../pages/register/register-group/register-group.component';
import { ConsultClientsComponent } from '../pages/consult/consult-clients/consult-clients.component';
import { ConsultGroupsComponent } from '../pages/consult/consult-groups/consult-groups.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'register-client',
    component: ClientsComponent
  },
  {
    path: 'register-group',
    component: RegisterGroupComponent
  },
  {
    path: 'consult-clients',
    component: ConsultClientsComponent
  },
  {
    path: 'consult-groups',
    component: ConsultGroupsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
