import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.less'],
})
export class ProductListItemComponent {
  @Input()
  product: Product | undefined;

  @Output()
  addToCart: EventEmitter<Product> = new EventEmitter<Product>();

  addToCartClicked(product: Product) {
    console.log(`Added item ${product.name} to cart`);
    this.addToCart.emit(product);
  }
}
