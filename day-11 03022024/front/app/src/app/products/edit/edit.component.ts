import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  form = new FormGroup({
    product: new FormControl('', [ Validators.required,Validators.minLength(3) ] ),
    price: new FormControl('', [ Validators.required ] ),
    stock: new FormControl('', [ Validators.required ] ),
    category: new FormControl('', [ Validators.required ] )
    
  
  })

  success:string='';
  error:string='';
  

  categories:any[]=[];


  id:string = '';


  constructor(private api:ApiService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.initData();
  }

  initData(){
    this.api.getCategoriesList().toPromise().then((res:any)=>{
      this.categories = res;
    })

    this.api.getListOfProducts().toPromise().then((products:any)=>{
      products.map((p:any)=>{
        if (p.id == this.id) {
          this.form.setValue({
            product:p.product,
            price:p.price,
            stock:p.stock,
            category:p.category.id
          })
        }
      })
    })
  }

  save(){

    

    this.api.updateProduct(this.form.value,this.id).toPromise().then((res:any)=>{
      if (res.success == true) {
        this.success = res.message;

     
      }else{
        this.error = res.message;
      }
    }).catch((err)=>{
      this.error='Something went wrong, please try again.';
    })
  }


}
