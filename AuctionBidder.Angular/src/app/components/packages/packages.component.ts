import { Component, OnInit } from '@angular/core';
import { TestPackages } from '../../classes/package';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  packages = TestPackages;

  constructor() { }

  ngOnInit() {
  }

}
