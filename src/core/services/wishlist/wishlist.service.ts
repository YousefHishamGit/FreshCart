import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../Enviroments/constents';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishCount:BehaviorSubject<number> = new BehaviorSubject(6);

  constructor(private http:HttpClient) { }
  addAllProductWish(prodId:string):Observable<any>
  {
    return this.http.post(`${environment.apiUrl}wishlist`,{productId:prodId});
  }
  removeProductWish(id:string):Observable<any>{
    return this.http.delete(`${environment.apiUrl}wishlist/${id}`);
  }
getAllWishList():Observable<any>{
  return this.http.get(`${environment.apiUrl}wishlist`);
}
}
