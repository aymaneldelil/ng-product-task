import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//---------------------------------------------------------------------------------------------------------------------------------------------

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./view/product-list/product-list.module').then(
        (t) => t.ProductListModule
      ),
  },
  {
    path: 'product/:id',
    loadChildren: () =>
      import('./view/product-details/product-details.module').then(
        (t) => t.ProductDetailsModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./view/page404/page404.module').then((t) => t.Page404Module),
  },
];
//---------------------------------------------------------------------------------------------------------------------------------------------
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
