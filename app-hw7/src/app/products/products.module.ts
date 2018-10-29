import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookComponent, BookListComponent, BookDetailsComponent],
  exports: [BookListComponent, BookDetailsComponent]
})
export class ProductsModule { }
