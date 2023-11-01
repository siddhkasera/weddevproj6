// Contains all the custom types we want to use for our application
import Classics from './assets/images/categories/classics.jpg';
import Fantasy from './assets/images/categories/fantasy.jpg';
import Mystery from './assets/images/categories/mystery.jpg';
import Romance from './assets/images/categories/romance.jpg';
export interface BookItem {
  bookId: number;
  title: string;
  author: string;
  price: number;
  isPublic: boolean;
}

export interface CategoryItem {
  categoryId: number;
  name: string;
}


export interface BookItem {
  bookId: number;
  title: string;
  author: string;
  price: number;
  isPublic: boolean;
}


export const categoryImages: Record<string, any> = {
  classics: Classics,
  fantasy : Fantasy,
  mystery : Mystery,
  romance : Romance
};

//this interface represents the items(books) in our shopping cart
export class ShoppingCartItem {
  id:number;
  book: BookItem;
  quantity: number;

  constructor(theBook: BookItem) {
    this.id = theBook.bookId;
    this.book = theBook;
    this.quantity = 1;
  }
}
// this is used by the reducer. You can define it on the CartReducer
export const initialCartState:ShoppingCartItem[] =  [];

// export interface CatProp{
//   catList:CategoryItem[];
// }
// export interface BookProp{
//   bookList:BookItem[];
// }
// export const categoryImages: Record<string, any> = {
//   classics: Classics,
//   fantasy : Fantasy,
//   mystery : Mystery,
//   romance : Romance
// };
// export const categoryList = [
//   { categoryId: 1001, name: "Crime" },
//   { categoryId: 1002, name: "Fiction" },
//   { categoryId: 1003, name: "YA" },
//   { categoryId: 1004, name: "Mystery" },
// ];

// export const bookList = [
//   {
//     bookId: 1001,
//     title: "Reign American Royals",
//     author: "Katherine McGee",
//     price: 689,
//     isPublic: false,
//   },
//   {
//     bookId: 1002,
//     title: "The Brothers Hawthrone",
//     author: "Jennifer Lynn Barnes",
//     price: 1015,
//     isPublic: true,
//   },
//   {
//     bookId: 1003,
//     title: "Six of Crows",
//     author: "Leigh Bargudo",
//     price: 889,
//     isPublic: true,
//   },
//   {
//     bookId: 1004,
//     title: "One of Us is Next",
//     author: "Karen McManus",
//     price: 799,
//     isPublic: false,
//   },
// ];