import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StoreService } from './store.service';

@Injectable()
export class LoginInterceptorService implements HttpInterceptor {

  

  constructor(private router:Router,private storeService:StoreService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      req = req.clone()
      if(req.body.username === 'gokul' && req.body.password === '12345678'){
        alert('Login Successful');
        this.storeService.isLoggedIn = true
        this.router.navigate(['home'])

      }
      return next.handle(req)
  }
}
