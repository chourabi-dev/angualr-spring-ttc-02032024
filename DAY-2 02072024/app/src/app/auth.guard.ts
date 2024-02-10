import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private router:Router ){}



  canActivate(  route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // ...
      // deny access
      // REDIRECT TO LOGIN PAGE !!! 
      if( localStorage.getItem('connected') == '1' ){
        return true;
      }else{
        this.router.navigateByUrl('/auth');
        // save URL !!
        return false;
      }


  }
  
}
