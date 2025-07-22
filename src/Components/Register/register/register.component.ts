import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../core/services/Authentication/authentication.service';
import { Router } from '@angular/router';
import { loginBoolean } from '../../../core/Enviroments/constents';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  signUpForm :FormGroup=  new FormGroup({
    name: new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null,[Validators.required, Validators.email]),
    password: new FormControl(null,[Validators.required,  Validators.pattern(/^[A-Z][a-z0-9]{6,}$/)]),
    rePassword: new FormControl(null,[Validators.required]),
    phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  });
  private readonly Auth= inject(AuthenticationService)
  private readonly route = inject(Router);


  submitRegisterForm(): void {
    console.log("Entering submitRegisterForm method");
    console.log("Form Value:", this.signUpForm.valid);
    console.log("Form Data:", this.signUpForm.value);
    if (this.signUpForm.valid) {
      this.Auth.signUp(this.signUpForm.value).subscribe({
        next: (response) => {
          console.log('Registration successful', response);
          localStorage.setItem('token', response.token);
          this.signUpForm.reset();
          if (response.message === 'success') 
            { 
              setTimeout(() => {
                loginBoolean.isLogin = true;
                this.route.navigate(['/home']);

              },2000)
            }

        },
        error: (error) => {
          console.error('Registration failed', error);
          
        }
    }); 
  }
  }
}
