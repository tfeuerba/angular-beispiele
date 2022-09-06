import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);

  addToShoppingCart(product: Product) {
    const currentProductList = this.productsSubject.getValue();
    this.productsSubject.next([...currentProductList, { ...product }]);
  }

  getCart$(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }
}
