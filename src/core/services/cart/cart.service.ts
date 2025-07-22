import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../Enviroments/constents';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartNumber:BehaviorSubject<number>=new BehaviorSubject(0);

  constructor(private http:HttpClient) { }
  getCart():Observable<any>{
    return this.http.get(`${environment.apiUrl}cart`);
  }
  AddToCart(id:string):Observable<any>{
    return this.http.post(`${environment.apiUrl}cart`,{productId:id});
  }
  removeItem(id:string):Observable<any>{
    return this.http.delete(`${environment.apiUrl}cart/${id}`);
  }
  clearCart():Observable<any>{
    return this.http.delete(`${environment.apiUrl}cart`);
  }
  updateCount(id:string,newCount:number):Observable<any>{
    return this.http.put(`${environment.apiUrl}cart/${id}`,{
      count:newCount
    })
  }
}
