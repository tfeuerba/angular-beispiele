import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListRoutingModule } from './product-list-routing.module';

@NgModule({
  imports: [CommonModule, ProductListRoutingModule],
  declarations: [
    ProductListComponent,
    ProductListItemComponent,
    ProductDetailsComponent,
  ],
})
export class ProductlistModule {}
