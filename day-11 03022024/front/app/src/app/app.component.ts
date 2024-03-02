import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  menu:any[]=[
    {
      title:'Categories',
      path:'/categories'
    },
    {
      title:'Products',
      path:'/products'
    },
    
  ]
}
