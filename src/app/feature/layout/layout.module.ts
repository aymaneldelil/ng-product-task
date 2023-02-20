import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HNavbarComponent } from './h-navbar/h-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HNavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
RouterModule 

  ],
  exports:[
    HNavbarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
