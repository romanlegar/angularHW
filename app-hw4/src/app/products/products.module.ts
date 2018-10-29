import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent, BookComponent } from './components/index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BookListComponent,
    BookComponent
  ],
  exports: [
    BookListComponent
  ]
})
export class ProductsModule { }
