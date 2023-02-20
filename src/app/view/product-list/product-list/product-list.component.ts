import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/core/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: Array<Iproduct> = [];

  constructor(private _productSVC: ProductService) {}
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
