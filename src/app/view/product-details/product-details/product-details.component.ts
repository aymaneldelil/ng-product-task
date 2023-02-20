import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/core/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  private productId: string = '';
  public productDetails!: Iproduct;
  constructor(
    private _activeRoute: ActivatedRoute,
    private _productSVC: ProductService
  ) {}
//-------------------------------------------------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.initialValues()
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------
  private initialValues() {
    this.productId = this._activeRoute.snapshot.params['id'];
    this._productSVC.getProductDetails(this.productId).subscribe({
      next: (data) => {
        this.productDetails = data;
      },
    });
  }
}
