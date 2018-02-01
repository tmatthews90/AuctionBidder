import { Component, OnInit } from '@angular/core';
import { PackageTypes } from '../../classes/package';

@Component({
  selector: 'app-multi-sells',
  templateUrl: './multi-sells.component.html',
  styleUrls: ['./multi-sells.component.css']
})
export class MultiSellsComponent implements OnInit {

  PackageTypes = PackageTypes;

  constructor() { }

  ngOnInit() {
  }

}
