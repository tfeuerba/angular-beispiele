import { Component } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
})
export class ProductListComponent {
  products: Product[];

  lastProductAddedToCart: Product | undefined;

  constructor() {
    this.products = [
      { id: 1, name: 'Toy Race Car', price: '6.99' },
      { id: 2, name: 'Loaf of Bread', price: '0.99' },
      { id: 3, name: 'Angular Book', price: '14.29' },
    ];
  }

  onProductAddedToCart(product: Product) {
    this.lastProductAddedToCart = product;
  }

  isCartPriceHigh(): boolean {
    const price = this.lastProductAddedToCart?.price;
    return price !== undefined && parseFloat(price) > 7;
  }
}
