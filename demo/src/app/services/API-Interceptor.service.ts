import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AuthProviderService } from '../services/Auth.service';

@Injectable()

export class NoopInterceptor implements HttpInterceptor {

  constructor(
    private inj: Injector
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.inj.get(AuthProviderService).isLoggedIn()) {
      const auth = req.clone({
        headers: req.headers.set('Authorization', `Bearer 4340032c-6482-458a-a9b2-85493c2bb20b`)
      })
      req = auth;
    } else {
      const auth = req.clone({
        headers: req.headers.set('Authorization', '')
      })
      req = auth;
    }
    return next.handle(req)
      .map((event: HttpEvent<any>) => {
        return event;
      })
      .catch((err: any, caught) => {
        return Observable.throw(err);
      });
  }

}