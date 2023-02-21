import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/core/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter((item) => item.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: Array<Iproduct> = [];

  constructor(private _productSVC: ProductService, private _fb:formBuilder) {}
  stateForm = this._fb.group({
    stateGroup: '',
  });

  ngOnInit(): void {
    this.initialValues();
  }

  private initialValues() {
    this._productSVC.getProducts().subscribe({
      next: (res) => {
        this.products = res.products;
        console.log(this.products);
      },
    });
  }
}
