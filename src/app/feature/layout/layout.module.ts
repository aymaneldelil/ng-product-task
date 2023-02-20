import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HNavbarComponent } from './h-navbar/h-navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HNavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
