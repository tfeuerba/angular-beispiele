import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductListService } from '../../services/product-list.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { distinctUntilChanged, map, Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productListService: ProductListService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit() {
    this.productListService
      .loadAllProducts$()
      .subscribe((products) => (this.products = products));
  }

  onProductAddedToCart(product: Product) {
    this.shoppingCartService.addToShoppingCart(product);
  }

  getLastItemAddedToCart$(): Observable<Product | undefined> {
    return this.shoppingCartService.getCart$().pipe(
      distinctUntilChanged(),
      map((itemList) => {
        if (!itemList.length) {
          return undefined;
        } else {
          return itemList[itemList.length - 1];
        }
      })
    );
  }

  isCartPriceHigh$(): Observable<boolean> {
    return this.getLastItemAddedToCart$().pipe(
      distinctUntilChanged(),
      map((product) => {
        const price = product?.price;
        return price !== undefined && parseFloat(price) > 7;
      })
    );
  }
}
