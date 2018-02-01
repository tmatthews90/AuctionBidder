import { Component, OnInit } from '@angular/core';
import { TestBidders, Bidder } from '../../classes/bidder';
import { UserService } from '../../services/user.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  bidders: Bidder[] = TestBidders;
  registerBidderForm: FormGroup;
  registerBidder: boolean;
  bidderLookupFailed: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.registerBidderForm = new FormGroup({
      FirstName: new FormControl('', Validators.required),
      LastName: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required),
      Phone: new FormControl('', Validators.required),
    });
  }

  selectBidder(user: Bidder) {
    this.userService.bidder = user;
  }

  login(bidderNumber: number) {
    this.bidderLookupFailed = false;
    const bidder = TestBidders.find(b => b.BidderNumber === Number(bidderNumber));
    if (bidder) {
      this.userService.login(Number(bidderNumber));
    } else {
      this.bidderLookupFailed = true;
    }
  }

  register() {
    this.userService.bidder = new Bidder(this.registerBidderForm.value);
    this.registerBidderForm.reset();
    this.registerBidder = false;
  }

}
