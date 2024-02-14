import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  email:string='test@yahoo.fr'
  constructor() { }

  ngOnInit(): void {
  }

  

}
