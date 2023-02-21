import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from 'src/app/services/product.service';
import { AngularMaterialModule } from 'src/app/feature/angular-material/angular-material.module';

//---------------------------------------------------------------------------------------------------------------------------------------------
@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
AngularMaterialModule

  ],
  providers:[
    ProductService
  ]
})
export class ProductListModule { }
