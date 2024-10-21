import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup; 

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], 
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { username, password, phone } = this.loginForm.value;

      const registeredUser = JSON.parse(localStorage.getItem('registeredUser') || '{}');

      if (registeredUser.username === username && 
          registeredUser.password === password && 
          registeredUser.phone === phone) {
        console.log('Login successful');
        this.router.navigate(['/tab1']);
      } else {
        alert('Invalid username, password, or phone number');
      }
    } else {
      alert('Please enter all required fields correctly.');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToAdminLogin() {
    this.router.navigate(['/admin-login']);
  }

  goBack() {
    this.router.navigate(['..']);
  }

  forgotPassword() {
    const phone = this.loginForm.get('phone')?.value;
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser') || '{}');

    if (registeredUser.phone === phone) {
      
      console.log(`Sending password to ${phone}: ${registeredUser.password}`);
      alert(`A password reset code has been sent to ${phone}.`);
    } else {
      alert('Phone number not recognized.');
    }
  }
}
