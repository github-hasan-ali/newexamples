import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Transfer } from '../models/transfer';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<Transfer[]>{
    return this.httpClient.get<Transfer[]>("http://localhost:3000/transfers")
  }
}
