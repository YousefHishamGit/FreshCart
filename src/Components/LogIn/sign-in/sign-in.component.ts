import { Component, inject, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/services/Authentication/authentication.service';
import { ReactiveFormsModule,FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginBoolean } from '../../../core/Enviroments/constents';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  private readonly router =inject(Router);
  private readonly Auth = inject(AuthenticationService);
    signInForm:FormGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });







  submitSignInForm(): void {
    console.log("Entering submitSignInForm method");
    console.log("Form Value:", this.signInForm.valid);
    if(this.signInForm.valid){
      this.Auth.signIn(this.signInForm.value).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          localStorage.setItem('token', response.token);
          this.signInForm.reset();
          if (response.message === 'success') {
            setTimeout(() => {
              loginBoolean.isLogin = true;
              this.router.navigate(['/home']);
            }, 2000);
          }
        },
        error: (error) => {
          console.error('Login failed', error);
        }
      });

    }



}
}