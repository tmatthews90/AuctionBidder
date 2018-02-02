import { Component, OnInit } from '@angular/core';
import { PackageType } from '../../classes/package';

@Component({
  selector: 'app-live-auction',
  templateUrl: './live-auction.component.html',
  styleUrls: ['./live-auction.component.css']
})
export class LiveAuctionComponent implements OnInit {

  PackageType = PackageType;

  constructor() { }

  ngOnInit() {
  }

}
