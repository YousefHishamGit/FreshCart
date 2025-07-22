import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../Enviroments/constents';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  cashPayment(cartId:string,data:object):Observable<any>{
    return this.http.post(`${environment.apiUrl}orders/${cartId}`,{"shippingAddress":data});
  }
  onlinePayment(cartId:string,data:object):Observable<any>{
    return this.http.post(`${environment.apiUrl}orders/checkout-session/${cartId}?url=http://localhost:4200`,{
      "shippingAddress":data
    })
  }
}
