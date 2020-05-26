import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: [''],
      password: ['']
    });
  }

  get form() { return this.loginForm.controls; }

  login() {
    this.authService.login(
      {
        login: this.form.login.value,
        password: this.form.password.value
      }
    )
    .subscribe(success => {
      if (success) {
        this.router.navigate(['/secret-random-number']);
      }
    });
  }

}
