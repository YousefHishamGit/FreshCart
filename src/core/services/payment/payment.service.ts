import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../Enviroments/constents';
import {jwtDecode} from 'jwt-decode'


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  token:any;
  decodedToken:any;

  constructor(private http:HttpClient) { 
    this.token=localStorage.getItem('token');
    if(this.token){
      try{
        this.decodedToken=jwtDecode(this.token)
      }
      catch(error){
        this.decodedToken=null

      }

    }
  }

  cashPayment(cartId:string,data:object):Observable<any>{
    return this.http.post(`${environment.apiUrl}orders/${cartId}`,{"shippingAddress":data});
  }
  onlinePayment(cartId:string,data:object):Observable<any>{
    return this.http.post(`${environment.apiUrl}orders/checkout-session/${cartId}?url=http://localhost:4200`,{
      "shippingAddress":data
    })
  }

  getUserOrder():Observable<any>{
    return this.http.get(`${environment.apiUrl}orders/user/${this.decodedToken.id}`);

  }
}
