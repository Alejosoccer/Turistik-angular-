import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Registro } from './registro';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class RegistroService {


  private apiURL = "http://localhost:8000/api/register";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Registro[]> {
    return this.httpClient.get<Registro[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  createRegister(registro:any): Observable<Registro> {
    return this.httpClient.post<Registro>(this.apiURL, JSON.stringify(registro), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
 
}
