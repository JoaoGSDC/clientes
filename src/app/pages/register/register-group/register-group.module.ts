import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterGroupComponent } from './register-group.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegisterGroupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RegisterGroupModule { }
