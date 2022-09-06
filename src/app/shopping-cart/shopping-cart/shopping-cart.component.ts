import { Component } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { map, Observable } from 'rxjs';

type ShoppingMap = { [name: string]: number };

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.less'],
})
export class ShoppingCartComponent {
  constructor(private shoppingCartService: ShoppingCartService) {}

  get cartItems$(): Observable<ShoppingMap> {
    return this.shoppingCartService.getCart$().pipe(
      map((items) => {
        const shoppingMap: ShoppingMap = {};
        for (let item of items) {
          if (!shoppingMap.hasOwnProperty(item.name)) {
            shoppingMap[item.name] = 0;
          }
          shoppingMap[item.name]++;
        }
        return shoppingMap;
      })
    );
  }

  get shoppingCartEmpty$(): Observable<boolean> {
    return this.shoppingCartService
      .getCart$()
      .pipe(map((items) => items.length === 0));
  }
}
