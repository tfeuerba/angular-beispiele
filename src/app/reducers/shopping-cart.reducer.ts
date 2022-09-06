import { createReducer, on } from '@ngrx/store';
import { Product } from '../model/product';
import * as ProductListActions from './product-list.actions';

export const shoppingCartFeatureKey = 'shoppingCart';

export interface ShoppingCartState {
  products: Product[];
}

export const initialState: ShoppingCartState = {
  products: [],
};

export const shoppingCartReducer = createReducer(
  initialState,
  on(ProductListActions.addItemToCartAction, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
  }))
);
