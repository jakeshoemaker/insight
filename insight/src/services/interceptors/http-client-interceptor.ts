import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add request headers & pass request
        console.log('injecting headers')
        const modified = req.clone({
            headers: req.headers.append('Access-Control-Allow-Origin', '*')
        })
        return next.handle(req);
    }
}