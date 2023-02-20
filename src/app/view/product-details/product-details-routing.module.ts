import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:""  ,component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[
    ProductService
  ]
})
export class ProductDetailsRoutingModule { }
