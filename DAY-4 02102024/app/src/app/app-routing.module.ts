import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';

const routes: Routes = [
  { path:'', component:ProductPageComponent },
  { path:'cart', component:CartPageComponent },
  
  { path:'create-product', component:CreateProductComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
