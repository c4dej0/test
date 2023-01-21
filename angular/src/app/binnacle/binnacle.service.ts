import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Binnacle } from './binnacle';

@Injectable({
  providedIn: 'root'
})
export class BinnacleService {

  private apiURL = "http://localhost:8000/api/binnacle/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

 constructor(private httpClient: HttpClient) { }
 

  getAll(): Observable<Binnacle[]> {
    return this.httpClient.get<Binnacle[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(binnacle): Observable<Binnacle> {
    return this.httpClient.post<Binnacle>(this.apiURL, JSON.stringify(binnacle), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id): Observable<Binnacle> {
    return this.httpClient.get<Binnacle>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id, binnacle): Observable<Binnacle> {
    return this.httpClient.put<Binnacle>(this.apiURL + id, JSON.stringify(binnacle), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete<Binnacle>(this.apiURL + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
