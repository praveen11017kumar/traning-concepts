import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    debugger;

    let headers = new HttpHeaders();
    
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', 'my-auth-token');
    headers = headers.set('XYZ', 'my-auth-token');
    headers = headers.set('email','vamsi@gmail.com');
    const authReq = request.clone({headers});

    return next.handle(authReq)
      .pipe(
        map(res => {
          console.log("Passed through the interceptor in response");
          return res;
        }),
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            console.log('This is client side error');
            errorMsg = `Error: ${error.error.message}`;
          } else {
            console.log('This is server side error');
            errorMsg = `Error Code: ${error.status},  Message: ${error.error.message}`;
          }
          console.log(errorMsg);
          alert(errorMsg)
          return throwError(errorMsg);
        })
      )
  }
}
