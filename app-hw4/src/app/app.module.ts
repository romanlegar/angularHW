import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CartModule } from './cart/cart.module';
import { AppComponent } from './app.component';
import { OrdersModule } from './orders/orders.module';
import { DirectivesDirective } from './shared/directives.directive';
import { ProductsModule } from './products/products.module';
@NgModule({
  declarations: [
    AppComponent,
    DirectivesDirective
  ],
  imports: [
    BrowserModule,
    OrdersModule,
    CartModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
