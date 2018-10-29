import { Component, OnInit } from '@angular/core';
import CartItemModel from '../../models/cart-item.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private arrCarts: Array<CartItemModel>
  constructor() {

  }

  ngOnInit() {
    this.arrCarts = [
      new CartItemModel(1, 'Book 1', 10, 'img', 'quantity'),
      new CartItemModel(2, 'Book 2', 20, 'img', 'quantity'),
      new CartItemModel(3, 'Book 3', 30, 'img', 'quantity')
    ];
  }
  public get cartComponents(): Array<CartItemModel> {
    return this.arrCarts;
  }
  public set cartComponents(value: Array<CartItemModel>) {
    this.arrCarts = value;
  }
}
