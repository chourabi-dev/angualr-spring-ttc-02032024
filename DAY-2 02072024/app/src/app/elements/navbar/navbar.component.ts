import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',  // is the one we use to call a componenet !!! == tagname EXMPL h1 body ....
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
