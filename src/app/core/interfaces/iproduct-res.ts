import { Iproduct } from './iproduct';
//---------------------------------------------------------------------------------------------------------------------------------------------
export interface IproductRes {
  products: Array<Iproduct>;
  total: number;
  skip: number;
  limit: number;
}
