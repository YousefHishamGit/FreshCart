import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../Enviroments/constents';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAllProducts():Observable<any> {
    return this.http.get(`${environment.apiUrl}products`);
  }
  getSpecificProduct(id: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}products/${id}`);
  }
}
