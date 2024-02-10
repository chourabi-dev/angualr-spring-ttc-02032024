import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  shopping:any[] = [];



  constructor() { }


  addItemToShopping(p:any){
    this.shopping.push(p);
    console.log("item added !!");
    
  }

  removeProductByID(product:any){
    this.shopping.map((p,index)=>{
      if( p.id == product.id ){
        this.shopping.splice(index,1);
      }
    })
  }

}
