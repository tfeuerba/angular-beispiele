import { Routes } from '@angular/router';
import { ProductListComponent } from './productlist/product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './productlist/product-details/product-details.component';

export const appRoutes: Routes = [
  { path: 'products-list', component: ProductListComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '', redirectTo: 'products-list', pathMatch: 'full' },
];
