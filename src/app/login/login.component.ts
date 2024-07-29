import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = {
        ...this.loginForm.value,
        useCookies: true
      };
      this.http.post<{ token: string }>('https://localhost:7239/login', formData)
        .subscribe(
          response => {
            console.log('Login successful', response);
            localStorage.setItem('token', response.token);
            this.errorMessage = ''; // Clear any previous error messages
          },
          error => {
            console.error('Login failed', error);
            this.errorMessage = 'Invalid email or password. Please try again.';
          }
        );
    }
  }
}
