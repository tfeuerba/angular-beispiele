import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  shoppingCartFeatureKey,
  ShoppingCartState,
} from './shopping-cart.reducer';

export type ShoppingMap = { [name: string]: number };

export const selectFeature = createFeatureSelector<ShoppingCartState>(
  shoppingCartFeatureKey
);

export const selectProducts = createSelector(
  selectFeature,
  (state) => state.products
);

export const selectLastAddedProduct = createSelector(
  selectProducts,
  (products) => {
    if (products.length) {
      return products[products.length - 1];
    } else {
      return undefined;
    }
  }
);

export const selectProductQuantityMap = createSelector(
  selectProducts,
  (products): ShoppingMap => {
    const shoppingMap: ShoppingMap = {};
    for (let product of products) {
      if (!shoppingMap.hasOwnProperty(product.name)) {
        shoppingMap[product.name] = 0;
      }
      shoppingMap[product.name]++;
    }
    return shoppingMap;
  }
);

export const selectIsCartEmpty = createSelector(
  selectProducts,
  (products) => products.length === 0
);
