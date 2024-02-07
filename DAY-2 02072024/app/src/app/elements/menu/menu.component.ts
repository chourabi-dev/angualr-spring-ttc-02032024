import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu:any[] = [
    { title:'Home' ,link:'#' },
    { title:'Home' ,link:'#' },
    { title:'Profile' ,link:'#' },
    { title:'Home' ,link:'#' },
    { title:'About' ,link:'#' },
     
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
