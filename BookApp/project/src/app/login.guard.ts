

/*Angular guard is an interface which can be implemented to decide if a route can be activated.
 If all guards return true, navigation continues. If any guard returns false, navigation is cancelled.
*/ 


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterserviceService } from './routerservice.service';

@Injectable({
  providedIn: 'root'
})
export class LoginguardGuard implements CanActivate {
  //boolean:f
  constructor(private router : Router,private routerService:RouterserviceService){}
  ngOnInit() {
    console.log('Login guard activated!');
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      return false;
      
  }
  
}

