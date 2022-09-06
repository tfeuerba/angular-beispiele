import { createFeature, createReducer, on } from '@ngrx/store';
import { Product } from '../model/product';
import * as ProductListActions from './product-list.actions';
import * as ProductApiActions from './products-api.actions';
import produce from 'immer';

export interface ProductListState {
  products: Product[] | undefined;
  loading: boolean;
}

export const initialState: ProductListState = {
  products: undefined,
  loading: false,
};

export const productListFeature = createFeature({
  name: 'productList',
  reducer: createReducer(
    initialState,

    on(
      ProductListActions.loadProductList,
      produce((draft) => {
        draft.products = undefined;
        draft.loading = true;
      })
    ),

    on(ProductApiActions.productsLoadedSuccess, (state, { products }) =>
      produce(state, (draft) => {
        draft.products = products;
        draft.loading = false;
      })
    ),

    on(
      ProductApiActions.productsLoadedFailure,
      produce((draft) => {
        draft.loading = false;
      })
    )
  ),
});

export const {
  name,
  reducer,
  selectProductListState,
  selectProducts,
  selectLoading,
} = productListFeature;
