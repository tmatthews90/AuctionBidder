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
  loginForm: FormGroup;
  bidderLookupFailed: boolean;
  displayLogin: boolean;
  displayRegister: boolean;
  testBidders = TestBidders;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService._bidder.subscribe(bidder => this.bidder = bidder);
    this.userService._displayLogin.subscribe(display => this.displayLogin = display);
    this.registerBidderForm = new FormGroup({
      FirstName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required),
      Phone: new FormControl('', Validators.required),
    });
    this.loginForm = new FormGroup({
      BidderNumber: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  login() {
    this.bidderLookupFailed = false;
    const bidder = TestBidders.find(b => b.BidderNumber === Number(this.loginForm.get('BidderNumber').value)) ;
    if (bidder) {
      this.loginForm.reset();
      this.userService.bidder = bidder;
      this.displayRegister = false;
      this.displayLogin = false;
    } else {
      this.bidderLookupFailed = true;
    }
  }

  register() {
    this.userService.bidder = new Bidder(this.registerBidderForm.value);
    this.registerBidderForm.reset();
    this.displayRegister = false;
    this.displayLogin = false;
  }

  logout() {
    this.userService.bidder = null;
  }
}
