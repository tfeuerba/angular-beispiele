import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './productlist/product-list/product-list.component';
import { ProductListItemComponent } from './productlist/product-list-item/product-list-item.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductListItemComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
