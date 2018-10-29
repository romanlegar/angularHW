import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { BookModel } from '../../models/BookModel';
import { BooksService } from 'src/app/shared/services/Books/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  id: number;
  book: Promise<BookModel>;
  public booksPromise: Promise<BookModel>;
  constructor(
    private route: ActivatedRoute,
    public booksService: BooksService
  ) {

  }
  ngOnInit(){
    this.route.paramMap.subscribe(params => {​
      this.id = +params.get("id");​
    });
    this.book = this.booksService.getBook(this.id);
    console.log("test",this.book);
  }

}
