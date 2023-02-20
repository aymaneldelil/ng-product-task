import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from 'src/app/services/product.service';

//---------------------------------------------------------------------------------------------------------------------------------------------
@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule
  ],
  providers:[
    ProductService
  ]
})
export class ProductListModule { }
