import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductListService } from '../../services/product-list.service';
import { distinctUntilChanged, map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ProductListActions from '../../reducers/product-list.actions';
import { addItemToCartAction } from '../../reducers/product-list.actions';
import * as ShoppingCartSelectors from '../../reducers/shopping-cart.selectors';
import * as ProductListSelectors from '../../reducers/product-list.reducer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
})
export class ProductListComponent implements OnInit {
  products$ = this.store.select(ProductListSelectors.selectProducts);
  loading$ = this.store.select(ProductListSelectors.selectLoading);

  lastItemAddedToCart$ = this.store.select(
    ShoppingCartSelectors.selectLastAddedProduct
  );

  constructor(
    private productListService: ProductListService,
    private store: Store
  ) {}

  ngOnInit() {
    this.store.dispatch(ProductListActions.loadProductList());
  }

  onProductAddedToCart(product: Product) {
    this.store.dispatch(addItemToCartAction({ product }));
  }

  isCartPriceHigh$(): Observable<boolean> {
    return this.lastItemAddedToCart$.pipe(
      distinctUntilChanged(),
      map((product) => {
        const price = product?.price;
        return price !== undefined && parseFloat(price) > 7;
      })
    );
  }
}
