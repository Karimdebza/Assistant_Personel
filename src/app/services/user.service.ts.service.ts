import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interface/iuser';
import { inject } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceTsService {
 
  baseUrl = 'http://localhost:8080/api/users';
  
  constructor(private http: HttpClient) { }

  signup(data:IUser){
    return this.http.post(`${this.baseUrl}/create`,data);

  }

}
