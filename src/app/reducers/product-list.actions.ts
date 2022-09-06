import { createAction, props } from '@ngrx/store';
import { Product } from '../model/product';

export const addItemToCartAction = createAction(
  '[Product List] Add Item',
  props<{ product: Product }>()
);

export const loadProductList = createAction('[Product List] Load Products');
