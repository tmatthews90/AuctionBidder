import { Component, OnInit } from '@angular/core';
import { PackageType } from '../../classes/package';

@Component({
  selector: 'app-silent-auction',
  templateUrl: './silent-auction.component.html',
  styleUrls: ['./silent-auction.component.css']
})
export class SilentAuctionComponent implements OnInit {

  PackageType = PackageType;

  constructor() { }

  ngOnInit() {
  }

}
