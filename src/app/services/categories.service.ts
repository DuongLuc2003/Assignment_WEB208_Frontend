import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/categories';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private API_Url = 'http://localhost:8000/api/categories'
  constructor(private http: HttpClient) { }
  getCategories(): Observable<{datas:ICategory[]}> {
    return this.http.get<{datas:ICategory[]}>(this.API_Url);
  }
 
}
