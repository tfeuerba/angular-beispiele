import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListRoutingModule } from './product-list-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { ProductListEffects } from '../reducers/product-list.effects';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { StoreModule } from '@ngrx/store';
import * as ProductListReducer from '../reducers/product-list.reducer';

@NgModule({
  imports: [
    CommonModule,
    ProductListRoutingModule,
    ProgressSpinnerModule,
    StoreModule.forFeature(ProductListReducer.name, ProductListReducer.reducer),
    EffectsModule.forFeature([ProductListEffects]),
  ],
  declarations: [
    ProductListComponent,
    ProductListItemComponent,
    ProductDetailsComponent,
  ],
})
export class ProductlistModule {}
