import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JsonPlaceholderInterceptorService implements  HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    const apiRoot = 'http://jsonplaceholder.typicode.com/';
    const jsonpReq = req.clone({
      url: apiRoot + req.url
    });
    return next.handle(jsonpReq);
  }

}
