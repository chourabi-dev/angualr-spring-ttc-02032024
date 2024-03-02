import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/products';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  products:Product[]= [];

  loading:boolean = false;

  
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }


  getData(){
    this.loading = true;
    this.api.getListOfProducts().toPromise().then((res:any)=>{
      this.products = res;

 

      console.log(res);
      
    }).catch((err)=>{

    }).finally(()=>{
      this.loading = false;
      
    });
  }


  delete(id:number){
    this.api.deleteProduct(id).toPromise().then((res:any)=>{
      if (res.success == true ) {
        // refrech page !!
        this.getData();
      }
    })
  }

}
