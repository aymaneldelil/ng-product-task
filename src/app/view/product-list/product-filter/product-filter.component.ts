import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, map, Observable, startWith, tap, mergeMap, debounceTime } from 'rxjs';
import { Iproduct } from 'src/app/core/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';

export interface iProductSearch {
  id: number;
  title: string;
}

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit {

  public product_fc = new FormControl('');
  public options: Array<iProductSearch> = [];
  @Output() filteredProduct = new EventEmitter<string>();
  //---------------------------------------------------------------------------------------------------------------------------------------------
  constructor(private _productSVC: ProductService) {}
  //---------------------------------------------------------------------------------------------------------------------------------------------
  ngOnInit() {
    this.initialValues();
    this.filterProduct();
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------
  private initialValues(): void {
    this._productSVC
      .getProducts()
      .pipe(
        mergeMap((m) => {
          return m.products;
        }),
        map((f) => {
          return { id: f.id, title: f.title };
        })
      )
      .subscribe({
        next: (res) => {
          this.options.push(res);
        },
      });
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
