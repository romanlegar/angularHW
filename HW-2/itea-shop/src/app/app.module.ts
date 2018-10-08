import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { BasketComponent } from './component/basket/basket.component';
import { ProductListComponent } from './component/product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasketComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
