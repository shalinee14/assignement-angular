import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguradServiceService implements CanActivate {

  constructor(private router:Router ) { }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const isThere = !!localStorage.getItem("key");
    if (!isThere){
      this.router.navigate(['login']);
    }
    return !!localStorage.getItem("key");
  }

}
