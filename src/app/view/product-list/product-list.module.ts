import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from 'src/app/services/product.service';
import { AngularMaterialModule } from 'src/app/feature/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFilterComponent } from './product-filter/product-filter.component';

//---------------------------------------------------------------------------------------------------------------------------------------------
@NgModule({
  declarations: [ProductListComponent, ProductFilterComponent],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [ProductService],
})
export class ProductListModule {}
