import HeaderDropdown from './HeaderDropdown';
import {useContext} from "react";
import '../assets/css/AppHeader.css';
import logo from '../assets/images/site_1/logo.jpeg';
import namelogo from '../assets/images/site_1/SK Books.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import React from "react";
import {CartStore} from "../contexts/CartContext";
function AppHeader(){
    const  {cart} = useContext(CartStore);
    console.log(cart);
    // const cartQuantity = cart.reduce((previousValue, currentValue)) =>{
    //     return previousValue + currentValue.quantity;
    //     }, 0);
    // }
const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
console.log(cartQuantity);




return(


    <header className = "container">
        <section className = "bookstore-logo">
            <Link to ="/">
                <img className = "img-logo" src={logo}
                     alt="SK Books Logo"/>
            </Link>
            <div className = "name-logo">
                <Link to= "/">
                    <img src={namelogo} alt="name logo"/>
                </Link>

            </div>
        </section>
        <section className ="search-drop-home">

            <div className ="search">
                <form action = ""></form>
                <input type="text" placeholder="Search Books" name="search"/>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{position: "relative", right: "26px",top:"2px"}}></FontAwesomeIcon>
                {/*<i className="fa fa-magnifying-glass fa-magnifying-glass" style={{position: "relative", right: "26px", top:"1px" }}></i>*/}
            </div>

            <section className = "drop-home-button-section">
                {/*<Link to ="/">*/}
                <Link to = "/">
                <button style={{fontSize: "20px", fontFamily: "Rasa"}} className ="home-button">Home</button>
                </Link>
                {/*</Link>*/}
                {/*<section className="header-dropdown-and-cart"> </section>*/}
                <HeaderDropdown  />


                {/*<div className="header-dropdown">*/}
                {/*    <a href="category.html" >*/}
                {/*        <button style={{fontSize:"20px", fontFamily: "Rasa"}} className ="category-drop-button">Categories <i className="fa-solid fa-caret-down"></i> </button>*/}
                {/*    </a>*/}
                {/*    <ul>*/}
                {/*        <li><a href="category.html?category=Crime">Crime</a></li>*/}
                {/*        <li><a href="category.html?category=Fiction">Fiction</a></li>*/}
                {/*        <li><a href="category.html?category=YA">YA</a></li>*/}
                {/*        <li><a href="category.html?category=Mystery">Mystery</a></li>*/}
                {/*    </ul>*/}
                {/*</div>*/}

            </section>

        </section>

        <section className="login-cart-align">
            <section className= "login-cart">
                <div style={{position:"relative", top: "80px", fontSize:"27px"}} className="cart">
                    {/*<i className="fa-solid fa-cart-shopping"></i>*/}
                    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    <div className="cartamount">({cartQuantity})</div>
                </div>
                <div className ="login">
                    <button style ={{fontSize:"20px"}} className="login-button">Hi! Siddhi</button>
                </div>
            </section>

        </section>


    </header>

)
}
export default AppHeader;

