import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Bidder, TestBidders } from '../../classes/bidder';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  bidder: Bidder;
  registerBidderForm: FormGroup;
  bidderLookupFailed: boolean;
  displayLogin: boolean;
  displayRegister: boolean;
  testBidders = TestBidders;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService._bidder.subscribe(bidder => {
      this.bidder = bidder ? bidder : null;
    });
    this.registerBidderForm = new FormGroup({
      FirstName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required),
      Phone: new FormControl('', Validators.required),
    });
  }

  login(bidderNumber: number) {
    this.bidderLookupFailed = false;
    const bidder = TestBidders.find(b => b.BidderNumber === Number(bidderNumber));
    if (bidder) {
      this.userService.bidder = bidder;
      this.displayRegister = false;
      this.displayLogin = false;
    } else {
      this.bidderLookupFailed = true;
    }
  }

  logout() {
    this.userService.bidder = null;
  }
}
