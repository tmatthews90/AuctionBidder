import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Bidder } from '../classes/bidder';

@Injectable()
export class BidderGuard implements CanActivate {

  bidder: Bidder;

  constructor(private userService: UserService, private router: Router) {
    this.userService._bidder.subscribe(bidder => this.bidder = bidder);
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.bidder) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
