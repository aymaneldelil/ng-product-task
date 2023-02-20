import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from 'src/app/core/interfaces/iproduct';
import { IproductRes } from 'src/app/core/interfaces/iproduct-res';

@Injectable()
export class ProductService {

  constructor(private _http: HttpClient) {}
  //-------------------------------------------------------------------------------------------------------------------------------------------
  getProducts(): Observable<IproductRes> {
    return this._http.get<IproductRes>('https://dummyjson.com/products');
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------
  getProductDetails(id: string): Observable<Iproduct> {
    return this._http.get<Iproduct>(`https://dummyjson.com/products/${id}`);
  }
}
