import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/core/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: Array<Iproduct> = [];
  //-------------------------------------------------------------------------------------------------------------------------------------------

  constructor(private _productSVC: ProductService, private _fb: FormBuilder) {}
  //-------------------------------------------------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.initialValues();
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------

  private initialValues() {
    this._productSVC.getProducts().subscribe({
      next: (res) => {
        this.products = res.products;
        console.log(this.products);
      },
    });
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------
  public getFilteredProduct(filter:string){

  this._productSVC.getFilteredProducts(filter).subscribe(
    {
      next:(res)=>{
        this.products = res.products;
      }
    }
  )
  }
}
