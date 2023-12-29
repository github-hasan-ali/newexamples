import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<User[]>{
    return this.httpClient.get<User[]>("http://localhost:3000/users")
  }
}
