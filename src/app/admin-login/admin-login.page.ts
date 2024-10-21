import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  login() {
    const { username, password } = this.loginForm.value;

   

    if (username === 'code_easy' && password === 'password12345678') {

      this.router.navigate(['/admin-dashboard']);
    } else {

      alert('Invalid username or password. Please try again.');
    }
  }

  goToRegister() {

    this.router.navigate(['/register']);
  }
}
