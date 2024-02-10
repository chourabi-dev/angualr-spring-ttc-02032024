import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  products:any[] = [
    { id:1, name:"iPhone 15", price:6500, photoURL:'https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg' },
    { id:2, name:"Samsung s23 ultra", price:4500, photoURL:'https://www.tunisianet.com.tn/290189-large/smartphone-samsung-galaxy-s23-ultra-5g-12-go-256-go-noir.jpg' },
    
  ]
  constructor(private cart:CartService) { }

  ngOnInit(): void {
  }


  addProduct(product:any){
    this.cart.addItemToShopping(
      { product }
     );
  }

}
