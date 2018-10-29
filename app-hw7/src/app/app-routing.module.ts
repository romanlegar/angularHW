import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent} from './products/components/book-details/book-details.component';
import { BookListComponent} from './products/components/book-list/book-list.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { ProcessOrderFormComponent } from './orders/components/process-order-form/process-order-form.component';
// import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'order',
    component: ProcessOrderFormComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'books/:id',
    component: BookDetailsComponent
  },
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
