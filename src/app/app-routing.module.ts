import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ClientsComponent } from './pages/register/clients/clients.component';
import { RegisterGroupComponent } from './pages/register/register-group/register-group.component';
import { ConsultGroupsComponent } from './pages/consult/consult-groups/consult-groups.component';
import { ConsultClientsComponent } from './pages/consult/consult-clients/consult-clients.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'register-client',
        component: ClientsComponent
      },
      {
        path: 'register-group',
        component: RegisterGroupComponent
      }
      ,
      {
        path: 'consult-clients',
        component: ConsultClientsComponent
      }
      ,
      {
        path: 'consult-groups',
        component: ConsultGroupsComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
