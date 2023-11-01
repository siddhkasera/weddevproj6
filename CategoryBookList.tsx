import   '../types';
import '../assets/css/CategoryBookList.css';
import CategoryBookListItem from './CategoryBookListItem';
import CategoryNav from './CategoryNav';
import  "../types";
// import {bookList} from "../types";
import {BookItem} from "../types";
// import {BookProp} from "../types";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function CategoryBookList() {

    const {id} = useParams();
    // console.log(`${id}`);

    const [books, setBooks ] = useState([]);
    useEffect(() => {
        axios.get(`/SiddhiBookstoreReactState/api/categories/name/${id}/books/`)
            .then((result)=> setBooks(result.data))
            .catch(console.error);
    }, [id]);

    // console.log(bookList);


    return (
      <>
          <CategoryNav/>
          {/*<ul className="book-lists">*/}
          <div className= "category-page">
          <div className="category-page-book-boxes">
          {/*<div className ="book-boxes">*/}
          {/*    {bookList.map((book:BookItem) => (*/}
          {/*        <CategoryBookListItem  bookId={book.bookId} isPublic={book.isPublic} price={book.price} title={book.title} author={book.author}/>))}*/}
          {/*</div>*/}
              <div className ="book-boxes">
                  {books.map((book:BookItem) => (
                      <CategoryBookListItem  bookId={book.bookId} isPublic={book.isPublic} price={book.price} title={book.title} author={book.author}/>))}
              </div>
          </div>
          </div>
      </>
)
}
export default CategoryBookList;
