import { BookModel } from 'src/app/products/models/book.model';
class CartItemModel extends BookModel {
    constructor(
        id: number,
        name: string,
        price: number,
        img: string,
        public quantity: number
    ) {
        super (id, name, price, img);
    }
}
export default CartItemModel;
