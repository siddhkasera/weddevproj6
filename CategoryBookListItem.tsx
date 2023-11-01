import '../assets/css/CategoryBookListItem.css';
import '../types'
import "../types";
import {BookItem} from "../types";
import {useContext } from "react";
import {CartTypes} from "../reducers/CartReducer";
import {CartStore} from "../contexts/CartContext";


const bookImageFileName =  (book:BookItem) => {
  let name = book.title.toLowerCase();
  name = name.replace(/ /g, "-");
  name = name.replace(/'/g, "");
  return `${name}.jpeg`;
};
// const bookName=  (book:BookItem) => {
//     let nameBook = book.title.toLowerCase();
//     // name = name.replace(/ /g, "-");
//     // name = name.replace(/'/g, "");
//     return nameBook;
// };



function CategoryBookListItem(props:BookItem) {

    const  {dispatch} = useContext(CartStore);
    const addBookToCart = () => {
        dispatch({ type: CartTypes.ADD, item:props, id: props.bookId });
        console.log(dispatch);
    };

return (

  // <li className="book-box">
  //  <div className="book-image">
  //     <img src={require('../assets/images/yabooks/' + bookImageFileName(props))}
  //       alt="book.title"
  //     />
  //   </div>
  //   <div className="book-title">{props.title }</div>
  //   <div className="book-author">{ props.author }</div>
  //   <div className="book-price">${ (props.price / 100).toFixed(2) }</div>
  //   <button className="button">Add to Cart</button>
  //   <button className="button">Read Now</button>
  // </li>

    // <div className= "category-page">
    //     <section className= "category-page-book-boxes">
    //         <div className = "book-boxes">
    // String bookNames = bookImageFileName(props);
    //         const name = ;

    <div className="image-box-one">
                    <div className ="category-image">
                        <img src={require('../assets/images/yabooks/' + bookImageFileName(props))}
                              alt="book.title"
                              width="170px"
                              height="240px"
                            />
                            <div className="read-now-button">{props.isPublic ? 'Read Now' :' '} </div>
                    </div>

                    <div className ="bookname-author-price">
                        <div style= {{fontSize: "28px"}} className="bookname">{props.title }</div>
                        <div style= {{fontSize: "20px"}} className="author">{props.author }</div>
                        <div style = {{fontSize: "22px"}} className= "price" >${ (props.price).toFixed(2) }</div>
                        <div className="addtocart">
                            <button style={{fontSize:"20px"}} className="addto-cart-button" onClick={addBookToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>

    //         </div>
    //
    //     </section>
    //
    // </div>

)
}
export default CategoryBookListItem;
