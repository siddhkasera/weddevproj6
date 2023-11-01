// import '../assets/css/global.css'
import '../assets/css/HeaderDropdown.css';
// import {categoryList} from '../types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import {useContext} from "react";
import {Category} from "../contexts/CategoryContext";
import {CategoryItem} from "../types";

import { Link } from 'react-router-dom';
// import {CatProp} from "../types";



function HeaderDropdown() {
    const categories = useContext<CategoryItem[]>(Category);
  return (
    <div className="header-dropdown">
    <Link to= '/categories/Crime'><button className="category-drop-button" style={{fontSize:"20px", fontFamily:"Rasa"}} >Categories <FontAwesomeIcon icon={faCaretDown}/> </button>
          </Link>

          <ul>
         {categories.map((item) =><li>
             <Link to ={`/categories/${item.name}`}>
                 {item.name}</Link></li>)}
        </ul>

</div>

)
}
export default HeaderDropdown

