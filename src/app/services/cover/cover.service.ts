import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoverService {

  private acessKey: string = 'PnJbiziVCdrbgKsna7SfV3CoTt3QbYNJIuvRFD5rlRk';
  private endPoint: string = 'https://api.unsplash.com/search/photos';
  private perPage: number = 20;
  private pageData = '&per_page=' + this.perPage;
  private url: string = this.endPoint + "?client_id=" + this.acessKey + this.pageData;
  
  constructor(private http: HttpClient) { }

  getImages(query): Observable<any[]>{
    return this.http.get<any[]>(this.url + "&query=" + query)
      .pipe(
        map(response => response),
        retry(2),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
