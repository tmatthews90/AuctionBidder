import { Component, OnInit } from '@angular/core';
import { TestBidders, Bidder } from '../../classes/bidder';
import { UserService } from '../../services/user.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  bidders = TestBidders;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  selectBidder(user: Bidder) {
    this.userService.bidder = user;
  }

  login(bidderNumber: number) {
    this.userService.login(Number(bidderNumber));
  }

}
