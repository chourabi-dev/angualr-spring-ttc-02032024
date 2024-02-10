import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  imageShoppping:any[] = [];
  constructor( private cart:CartService ) { }

  ngOnInit(): void {
    console.log("NAVBAR ON SCREAN");
    
    this.imageShoppping = this.cart.shopping; // INIT []
  }

}
