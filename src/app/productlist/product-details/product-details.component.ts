import { Component } from '@angular/core';
import { ProductListService } from '../../services/product-list.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, shareReplay, switchMap } from 'rxjs';
import { Product } from '../../model/product';
import { ProductWithDetails } from '../../model/product-with-details';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less'],
})
export class ProductDetailsComponent {
  product$: Observable<ProductWithDetails>;

  constructor(
    private productListService: ProductListService,
    private activatedRoute: ActivatedRoute
  ) {
    this.product$ = activatedRoute.params.pipe(
      switchMap((params) =>
        this.productListService.loadProductDetail$(params['id'])
      ),
      shareReplay(1)
    );
  }
}
