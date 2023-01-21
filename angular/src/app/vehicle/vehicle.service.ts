import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private apiURL = "http://localhost:8000/api/vehicle/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

 constructor(private httpClient: HttpClient) { }
 

  getAll(): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(vehicle): Observable<Vehicle> {
    return this.httpClient.post<Vehicle>(this.apiURL, JSON.stringify(vehicle), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id): Observable<Vehicle> {
    return this.httpClient.get<Vehicle>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id, vehicle): Observable<Vehicle> {
    return this.httpClient.put<Vehicle>(this.apiURL + id, JSON.stringify(vehicle), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete<Vehicle>(this.apiURL + id, this.httpOptions)
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
