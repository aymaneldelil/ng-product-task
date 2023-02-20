import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingStarComponent } from './component/rating-star/rating-star.component';



@NgModule({
  declarations: [
    RatingStarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[RatingStarComponent]
})
export class RatingStarModule { }
