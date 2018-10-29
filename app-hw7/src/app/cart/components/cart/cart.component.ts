import { Component, OnInit } from '@angular/core';
import { CartItemModel } from '../../models/CartItemModel';
import { CartService } from 'src/app/shared/services/Cart/cart.service';
import { Router } from '@angular/router';
import { CartHttpService } from 'src/app/shared/services/orders/cart.http.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  components: Promise<Array<CartItemModel>>;
  total: number;
  count: number;
  constructor(
    private cartHttpService: CartHttpService,
    private cartService: CartService,
    private router: Router
  ){}
  ngOnInit() {
    this.components = this.cartHttpService.getCartItems();
    console.log("sd", this.components)
    console.log("sd", this.components)
  }

    // this.cartService.cust.subscribe(comp => { let t = this.cartService.updateTotals();
    //                                           this.total=t.sum;
    //                                           this.count=t.count;
    //                                           this.components = comp; });
  // }
}


// onRemoveButtonClicked(cartItem: CartItemModel)
// {
//   this.cartService.delFromCart(cartItem);
// }
//
// onMinusButtonClicked(cartItem: CartItemModel)
// {
//   this.cartService.decQuantity(cartItem);
// }
//
// onPlusButtonClicked(cartItem: CartItemModel)
// {
//   this.cartService.incQuantity(cartItem);
// }
// onCreateOrder()
// {
//   console.log(  this.router.navigate)
//   let link: any = '/order';
//   console.log(this.components);
//   this.router.navigateByUrl('/login');
// }
//
