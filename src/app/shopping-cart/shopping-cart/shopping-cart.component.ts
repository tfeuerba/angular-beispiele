import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ShoppingCartSelectors from '../../reducers/shopping-cart.selectors';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.less'],
})
export class ShoppingCartComponent {
  readonly shoppingCartEmpty$ = this.store.select(
    ShoppingCartSelectors.selectIsCartEmpty
  );

  readonly cartItems$ = this.store.select(
    ShoppingCartSelectors.selectProductQuantityMap
  );

  constructor(private store: Store) {}
}
