import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../Enviroments/constents';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

    constructor(private http:HttpClient) { }

  getAllBrands():Observable<any>{
    return this.http.get(`${environment.apiUrl}brands`);
  }
  getSpecificBrand(id: string):Observable<any>{
    return this.http.get(`${environment.apiUrl}brands/${id}`);
  }
}
