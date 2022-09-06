import { createAction, props } from '@ngrx/store';
import { Product } from '../model/product';

export const productsLoadedSuccess = createAction(
  '[Products API] Products Loaded Success',
  props<{ products: Product[] }>()
);

export const productsLoadedFailure = createAction(
  '[Products API] Products Loaded Failure',
  props<{ error: any }>()
);
