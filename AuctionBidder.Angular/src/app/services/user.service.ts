import { Injectable } from '@angular/core';
import { Bidder, TestBidders } from '../classes/bidder';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {

  // private _bidder: Bidder;
  private bidderSubject = new BehaviorSubject<Bidder>(null);
  private displayLoginSubject = new BehaviorSubject<boolean>(false);
  public _bidder = this.bidderSubject.asObservable();
  public _displayLogin = this.displayLoginSubject.asObservable();

  constructor() { }

  set bidder(bidder: Bidder) {
    this.bidderSubject.next(bidder);
  }

  get bidder() {
    return this.bidderSubject.value;
  }

  set displayLogin(flag) {
    this.displayLoginSubject.next(flag);
  }

  get displayLogin() {
    return this.displayLoginSubject.value;
  }

  public login(bidNumber: number) {
    const user = TestBidders.find(b => b.BidderNumber === bidNumber);
    this.bidder = user ? user : null;
  }

}
