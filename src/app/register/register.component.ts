import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registerForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      this.http.post('https://localhost:7239/register', formData)
        .subscribe(
          response => {
            console.log('Registration successful', response);
            this.errorMessage = 'Registration successful'; // Clear any previous error messages
          },
          error => {
            console.error('Registration failed', error);
            this.errorMessage = 'Registration failed. Please try again.';
          }
        );
    }
  }
}
