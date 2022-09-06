import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductListService } from '../services/product-list.service';
import * as ProductListActions from './product-list.actions';
import * as ProductApiActions from './products-api.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductListEffects {
  constructor(
    private actions$: Actions,
    private productListService: ProductListService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductListActions.loadProductList),
      switchMap(() => this.productListService.loadAllProducts$()),
      map((products) => ProductApiActions.productsLoadedSuccess({ products })),
      catchError((error) => {
        console.error('loading products failed', error);
        return of(ProductApiActions.productsLoadedFailure({ error }));
      })
    )
  );
}
