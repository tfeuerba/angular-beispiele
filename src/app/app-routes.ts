import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'products-list',
    loadChildren: () =>
      import('./productlist/productlist.module').then(
        (m) => m.ProductlistModule
      ),
  },
  {
    path: 'shopping-cart',
    loadChildren: () =>
      import('./shopping-cart/shopping-cart.module').then(
        (m) => m.ShoppingCartModule
      ),
  },
  { path: '', redirectTo: 'products-list', pathMatch: 'full' },
];
