import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductlistModule } from './productlist/productlist.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductlistModule,
    ShoppingCartModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
