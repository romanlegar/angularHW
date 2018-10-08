import Category from './enums';
import {Book, Librarian} from './intefaces';
import {ReferenceItem, Encyclopedia, UniversityLibrarian} from "./classes/index";
showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}
//////1
function getAllBoocks(): any {
  let boocks = [
    { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category},
    { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category },
    { title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category },
    { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category }
  ];
  return boocks;
}

function logFirstAvailable(books: any[]): void {
  console.log(`Lengs of books : ${books.length}`);
  for (const book of books){
    console.log(`Title +${book.title}`);
    break;
  }
}
logFirstAvailable(getAllBoocks());

//////2
// enum Category{
//   JS,
//   CSS,
//   HTML,
//   TypeScript,
//   Angular
// }

function getBookTitlesByCategory( category: Category ): Array<string>{
  let books = getAllBoocks();
  let categoryBooks: Array<string> = books.map((book)=>{
    if (book.category === category) {
      return book.title;
    }
  })
  return categoryBooks;
}

function logBookTitles(categoryBooks: Array<string>): void {
  categoryBooks.forEach(element => console.log(element));
}

logBookTitles(getBookTitlesByCategory(Category.JS));

////3
// interface Book {
//   id: number;
//   title: string;
//   author: string;
//   available: boolean;
//   category: Category;
//   pages?: number;
//   markDamaged?: (reason: string) => void;
// }
function printBook(book: Book): void {
  console.log(`${book.title} by ${book.author}.`);
}

const myBook: Book = {
  id: 20,
  title:' string',
  author: ' string',
  available: true,
  category: Category.CSS,
  pages: 200,
  markDamaged: reason => console.log(`Damaged: ${reason}`)
}
printBook(myBook);
myBook.markDamaged('missing back cover');

///////////////////04
// interface Librarian{
//   name: string;
//   email: string;
//   department: string;
//   assistCustomer: (custName: string) => void;
// }
// class UniversityLibrarian implements Librarian {
//   name: string;
//   email: string;
//   department: string;
//   assistCustomer(custName: string){
//     console.log(`${this.name} is assisting ${custName}`)
//   }
// }

const favoriteLibrarian: Librarian = new UniversityLibrarian();

favoriteLibrarian.name = 'Anna';

// favoriteLibrarian.assistCustomer('Roma');
///////////////////05
// class ReferenceItem {
//   // title: string;
//   // year: number;
//   //
//   // constructor(newTitle:string, newYear:number){
//   //   this.title = newTitle;
//   //   this.year = newYear;
//   //
//   // }
//   constructor(
//     public title: string,
//     protected year: number
//   ){
//     console.log(`Createng`)
//   }
//   static department = 'IT';
//   private _publisher: string;
//   get publisher(): string{
//     return this._publisher.toUpperCase();
//   }
//   set publisher(newPublisher){
//      this._publisher = newPublisher;
//   }
//   printItem(): void {
//      console.log(`${this.title} was published in ${this.year}`);
//      console.log(ReferenceItem.department);
//   }
// }
// const ref = new ReferenceItem('My Title', 2018);
// ref.printItem();
// ref.publisher = 'Boris';
// console.log(ref.publisher);
//////6
// class  Encyclopedia  extends ReferenceItem {
//   edition: number
//
//   constructor(
//    title: string,
//    year: number,
//    edition: number){
//       super(title, year)
//     }
//     printItem(){
//       super.printItem();
//       console.log()
//     }
// }

const refBook = new Encyclopedia('My title', 2018, 199);
refBook.printItem();
