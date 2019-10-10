import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor(
    private AuthService: AuthService,
    private router: Router){}

    canActivate(): Promise<boolean>{
      return new Promise(resolve => {
        this.AuthService.getAuth().onAuthStateChanged(user => {
          if(!user) this.router.navigate(['']);
          resolve(user ? true : false);
        })
      })
    }

}
