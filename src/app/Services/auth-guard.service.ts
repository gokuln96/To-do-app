import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if(!this.storeService.isLoggedIn){
        alert('bhai login karke aa')
        this.router.navigate([''])
      } 
      return !!this.storeService.isLoggedIn
  }
  constructor(private storeService:StoreService,private router:Router) { }
}
