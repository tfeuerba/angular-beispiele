import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import {
  shoppingCartFeatureKey,
  shoppingCartReducer,
  ShoppingCartState,
} from './shopping-cart.reducer';

export interface State {
  [shoppingCartFeatureKey]: ShoppingCartState;
}

export const reducers: ActionReducerMap<State> = {
  [shoppingCartFeatureKey]: shoppingCartReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
