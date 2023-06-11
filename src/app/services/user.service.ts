import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IUser } from '../Iproduct/iuser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

   }
   singup(user:IUser): Observable<IUser> {
    return this.http.post<IUser>(`http://localhost:8000/api/signup`, user);
  }
   singin(user:IUser): Observable<IUser> {
    return this.http.post<IUser>(`http://localhost:8000/api/signin`, user);
  }
}
