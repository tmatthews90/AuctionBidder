import { Component, OnInit } from '@angular/core';
import { PackageType } from '../../classes/package';

@Component({
  selector: 'app-multi-sells',
  templateUrl: './multi-sells.component.html',
  styleUrls: ['./multi-sells.component.css']
})
export class MultiSellsComponent implements OnInit {

  PackageType = PackageType;

  constructor() { }

  ngOnInit() {
  }

}
