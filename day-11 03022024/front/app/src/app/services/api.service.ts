import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getCategoriesList(){
    return this.http.get(environment.serverURL+'/api/v1/category'); 
  }

  addCategory(category:any){
    return this.http.post(environment.serverURL+'/api/v1/category',category); 
  }

  updateCategory(category:any,id:any){
    return this.http.put(environment.serverURL+'/api/v1/category/'+id,category); 
  }

  deleteCategory(id:number){
    return this.http.delete(environment.serverURL+'/api/v1/category/'+id); 
  }


  /********************************************************************** */


  getListOfProducts(){
    return this.http.get(environment.serverURL+'/api/v1/product'); 
  }



  addProduct(p:any){
    return this.http.post(environment.serverURL+'/api/v1/product',p); 
  }

  
  deleteProduct(id:number){
    return this.http.delete(environment.serverURL+'/api/v1/product/'+id); 
  }


  updateProduct(body:any,id:any){
    return this.http.put(environment.serverURL+'/api/v1/product/'+id,body); 
  }
}

