import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../Enviroments/constents';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getAllCategory():Observable<any>{
    return this.http.get(`${environment.apiUrl}categories`);
  }
  getSpecificCategory(id: string):Observable<any>{
    return this.http.get(`${environment.apiUrl}categories/${id}`);
  }
}
