import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from 'src/app/services/product.service';
import { RatingStarModule } from 'src/app/shared/rating-star/rating-star.module';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [CommonModule, ProductDetailsRoutingModule, RatingStarModule],
  providers: [ProductService],
})
export class ProductDetailsModule {}
