import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  form = new FormGroup({
    product: new FormControl('',  [ Validators.required, Validators.minLength(3) ]   ),
    price: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required)
    
  });

  products:any[] = [];


  constructor() { }

  ngOnInit(): void {
    console.log(this.form);
    
  }

  submit(){
    console.log("submited !!");

    // GET DATA
    const body = this.form.value;
    console.log(body);
    
    // USE DATA
    this.products.push(body);
     

    // RESET FORM
    this.form.reset();
    
  }

}
