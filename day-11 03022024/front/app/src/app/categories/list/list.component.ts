import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  categories:Category[]= [];

  loading:boolean = false;

  
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }


  getData(){
    this.loading = true;
    this.api.getCategoriesList().toPromise().then((res:any)=>{
      this.categories = res;
      console.log(res);
      
    }).catch((err)=>{

    }).finally(()=>{
      this.loading = false;
      
    });
  }


  delete(id:number){
    this.api.deleteCategory(id).toPromise().then((res:any)=>{
      if (res.success == true ) {
        // refrech page !!
        this.getData();
      }
    })
  }



}
