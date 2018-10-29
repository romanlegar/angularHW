import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookModel } from '../../../products/models/BookModel';
import { CartItemModel } from 'src/app/cart/models/CartItemModel';

@Injectable({
  providedIn: 'root'
})
export class CartHttpService {

  private cartsUrl = 'http://localhost:3000/cart';

  constructor(private http: HttpClient) {}

  getCartItems(): Promise<CartItemModel[]> {
     const url = `${this.cartsUrl}`;
     return this.http
       .get(url)
       .toPromise()
       .then(response =>  <CartItemModel[]>response)
   }

   addToCart(book: BookModel) {
     const url = `${this.cartsUrl}`;
     const options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      const body = JSON.stringify(book);
     return this.http.post(url, body, options)
     .toPromise()
     .then(response => <BookModel>response);
   }
}
