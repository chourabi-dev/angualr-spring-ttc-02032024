import { Component } from '@angular/core';
import { ProductModel } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  username = 'chourabi';

  email?:string;

  year:number = 2024;

  date:Date = new Date();


  access:boolean = true;




  user:any = { fullname:"chourabi taher", email:"tchourabi@gmail.com" };


  employees:string[] = [
    'chourabi taher',
    'jason stathem',
    'john wick'
  ]



  // API ...
  products:ProductModel[] = [
    { id:1, product:'hp pavillion', price:2500, stock:15},
    { id:2, product:'sq;sung s21', price:3500, stock:0},
    
  ]







}
