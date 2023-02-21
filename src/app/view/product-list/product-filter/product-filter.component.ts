import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, mergeMap, debounceTime } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit {

  public product_fc = new FormControl('');
  @Output() filteredProduct = new EventEmitter<string>();
  //---------------------------------------------------------------------------------------------------------------------------------------------
  constructor(private _productSVC: ProductService) {}
  //---------------------------------------------------------------------------------------------------------------------------------------------
  ngOnInit() {
    this.filterProduct();
  }
  //--------------------------------------------------------------------------------------------------------------------------------------------
  private filterProduct(): void {
    this.product_fc.valueChanges.pipe(
      debounceTime(1000),
      map((m)=>{
        return m?.toLocaleLowerCase()
      })
    ).subscribe({
      next: (n) => {
        this.filteredProduct.emit(n!)
      },
    });
  }
}
