import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Bidder } from '../../classes/bidder';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  bidder: Bidder;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService._bidder.subscribe(bidder => {
      this.bidder = bidder ? bidder : null;
    });
  }

  logout() {
    this.userService.bidder = null;
  }

}
