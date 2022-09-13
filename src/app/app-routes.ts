import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IsAuthorizedGuard } from './guards/is-authorized.guard';

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
    canActivate: [IsAuthorizedGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'products-list', pathMatch: 'full' },
];
