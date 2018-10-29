import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../../models/BookModel';
import { CartHttpService } from 'src/app/shared/services/orders/cart.http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: BookModel;
  @Output() buyButtonClicked = new EventEmitter<BookModel>();
  constructor(
    private cartHttpService: CartHttpService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onViewDetails(event: any): void {
   const link = ['/books', this.book.id];
   this.router.navigate(link);
 }
  onBuyButtonClicked() {
    this.cartHttpService.addToCart(this.book);
    // this.buyButtonClicked.emit(this.book);
  }

}
