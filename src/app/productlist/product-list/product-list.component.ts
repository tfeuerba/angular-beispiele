import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductListService } from '../../services/product-list.service';
import { distinctUntilChanged, map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addItemToCartAction } from '../../reducers/product-list.actions';
import * as ShoppingCartSelectors from '../../reducers/shopping-cart.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  lastItemAddedToCart$ = this.store.select(
    ShoppingCartSelectors.selectLastAddedProduct
  );

  constructor(
    private productListService: ProductListService,
    private store: Store
  ) {}

  ngOnInit() {
    this.productListService
      .loadAllProducts$()
      .subscribe((products) => (this.products = products));
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
