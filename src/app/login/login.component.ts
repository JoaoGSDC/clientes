import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { Login } from '../interfaces/login';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  login: Login = {} as Login;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.builderForm();
  }

  onSubmit(): void {
    this.loginForm();
  }

  builderForm(): void {
    this.form = this.formBuilder.group({
      email: [null],
      password: [null]
    });
  }

  loginForm(): void {
    this.login = this.form.value as Login;
    this.authService.login(this.login).subscribe(res => {
      this.authService.isLogged = true;
      localStorage.setItem('token', res.toString());
      this.moveToApp();
    },
    error => {
      this.authService.isLogged = false;
      alert(error)
    });
  }

  moveToApp(): void {
    this.route.navigate(['/'], { relativeTo: this.activatedRoute });
  }

}
