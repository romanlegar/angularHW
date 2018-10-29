import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../../models/book.model'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: BookModel;
  @Output() buy: EventEmitter<BookModel> = new EventEmitter<BookModel>();

  constructor() { }

  ngOnInit() {
  }
  onBuy(event: any) {
    this.buy.emit(this.book);
  }
}
