import { Injectable } from '@angular/core';
import { Bidder, TestBidders } from '../classes/bidder';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {

  // private _bidder: Bidder;
  private bidderSubject = new BehaviorSubject<Bidder>(null);
  public _bidder = this.bidderSubject.asObservable();

  constructor() { }

  set bidder(bidder: Bidder) {
    this.bidderSubject.next(bidder);
  }

  get bidder() {
    return this.bidderSubject.value;
  }

  public login(bidNumber: number) {
    const user = TestBidders.find(b => b.BidderNumber === bidNumber);
    this.bidder = user ? user : null;
  }

}
