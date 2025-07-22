import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../Enviroments/constents';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { 
   }


    signUp(user:object):Observable<any> {
      return this.http.post(`${environment.apiUrl}auth/signup`,user);
    }
    signIn(user:object):Observable<any> {
      return this.http.post(`${environment.apiUrl}auth/signin`,user);
    }
    forgetPassword(email:string):Observable<any> {
      return this.http.post(`${environment.apiUrl}auth/forgotPasswords`,{email});
    }
    

}
