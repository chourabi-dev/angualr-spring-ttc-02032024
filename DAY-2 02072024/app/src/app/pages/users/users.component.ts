import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any[] =[
    {
      id:1,
      fullname:"chourabi taher"
    },
    {
      id:2,
      fullname:"ragheb"
    },
    {
      id:3,
      fullname:"sarra"
    },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
