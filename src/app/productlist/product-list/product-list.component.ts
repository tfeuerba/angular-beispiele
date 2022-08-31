import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductListService} from "../../services/product-list.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  lastProductAddedToCart: Product | undefined;

  constructor(private productListService: ProductListService) {
  }

  ngOnInit() {
    this.productListService.loadAllProducts$()
      .subscribe(products => this.products = products);
  }

  onProductAddedToCart(product: Product) {
    this.lastProductAddedToCart = product;
  }

  isCartPriceHigh(): boolean {
    const price = this.lastProductAddedToCart?.price;
    return price !== undefined && parseFloat(price) > 7;
  }
}
