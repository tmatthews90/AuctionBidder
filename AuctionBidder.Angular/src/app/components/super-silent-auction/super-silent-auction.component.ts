import { Component, OnInit } from '@angular/core';
import { PackageType } from '../../classes/package';

@Component({
  selector: 'app-super-silent-auction',
  templateUrl: './super-silent-auction.component.html',
  styleUrls: ['./super-silent-auction.component.css']
})
export class SuperSilentAuctionComponent implements OnInit {

  PackageType = PackageType;

  constructor() { }

  ngOnInit() {
  }

}
