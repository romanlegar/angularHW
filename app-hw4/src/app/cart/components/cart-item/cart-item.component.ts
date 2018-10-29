import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import CartItemModel from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cart: CartItemModel;
  @Output() change: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>();

  constructor() { }

  ngOnInit() {
    console.log(this.cart.quantity)
  }

  onPlus(event: any) {
    console.log(2222)
    this.cart.quantity++;
    console.log(  this.cart.quantity)
    this.change.emit(this.cart);
  }

  onMinus(event: any) {
    if (this.cart.quantity > 0) {
      this.cart.quantity--;
      this.change.emit(this.cart);
    }
  }
}
