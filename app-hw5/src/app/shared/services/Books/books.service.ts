import { Injectable } from '@angular/core';
import { BookModel } from 'src/app/products/models/BookModel';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooksAsync(): Promise<Array<BookModel>> {

    const books: Array<BookModel> = [
      new BookModel(1, 'Book 1', 75, 'https://i1.rozetka.ua/goods/portal/constructors/units/groups/51/51160.120x150.jpg'),
      new BookModel(2, 'Book 2', 75, 'https://i2.rozetka.ua/goods/portal/constructors/units/groups/51/51172.120x150.jpg'),
      new BookModel(3, 'Book 3', 31, 'https://i1.rozetka.ua/goods/portal/constructors/units/groups/143/143001.120x150.jpg')];

    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve(books);
      }, 1000);
    });
   }
}
