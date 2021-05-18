import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  employees:any;

  constructor(private http: HttpClient) { }

  getData(){
   return this.http.get<any>('http://dummy.restapiexample.com/api/v1/employees')
  
  }
}
