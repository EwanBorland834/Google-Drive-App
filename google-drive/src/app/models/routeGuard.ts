import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class RouteGuard implements CanActivate {
    
    constructor(private router: Router) {}
    
    canActivate(_route: ActivatedRouteSnapshot, _state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }
}