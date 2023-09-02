import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { request } from 'express';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newParams = new HttpParams({fromString:httpRequest.params.toString()})
    newParams=newParams.set('api_key','fafae84dc4-78dac5b1bd-s0bd49');
    const requestClone = httpRequest.clone({
      params:newParams
    });
    return next.handle(requestClone);
      
  }
}