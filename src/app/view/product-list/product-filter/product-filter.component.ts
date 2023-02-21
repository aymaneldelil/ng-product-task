import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, map, Observable, startWith, tap, mergeMap } from 'rxjs';
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
  product_fc = new FormControl('');
  options: Array<iProductSearch> = [];
  productList$!: Observable<Array<string>>;

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
          return { 'id': f.id, 'title': f.title };
        })
      )
      .subscribe({
        next: (res) => {
          this.options.push(res);
        },
      });
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------

  private filterProduct(): void {
    // this.productList$ = this.product_fc.valueChanges.pipe(
    this.product_fc.valueChanges.pipe(
      startWith(''),
      tap((t) => console.log(t)),
      // map((value) => this._filter(value || ''))
    ).subscribe()
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter((option) =>
  //   option.title.toLowerCase().includes(filterValue)
  //   );
  // }
}
