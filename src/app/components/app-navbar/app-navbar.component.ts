import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  isCollapsed: boolean;
  constructor() {
    this.isCollapsed = true;
  }

  ngOnInit() {
  }

}
