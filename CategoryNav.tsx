import '../assets/css/CategoryNav.css';
import {useContext} from "react";
import {Category} from "../contexts/CategoryContext";
import {CategoryItem} from "../types";
// import '../assets/css/global.css'
// import { categoryList } from '../types';
// import {CatProp} from '../types';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

import {useEffect, useState} from "react";
import axios from "axios";
function CategoryNav() {

  const {id} = useParams();
  const categories = useContext<CategoryItem[]>(Category);
  // console.log(id);

  // const [selectedId, isActive ] = useState([]);
  //
  //
  // useEffect(() => {
  //   axios.get(`/SiddhiBookstoreReactFetch/api/categories/name/${id}/books/`)
  //       .then((result)=> isActive(result.data))
  //       .catch(console.error);
  // }, [id]);

  return (
  // <nav className="category-nav">
    <div className="category-buttons">

      {categories.map((category) => (
  <Link to={`/categories/${category.name}`}>
          <button className="category-button" style={{ backgroundColor: category.name === id ? "papayawhip" : ""}}>
            {category.name}
          </button>
  </Link>

          ))}

    </div>
  // </nav>
)
}

export default CategoryNav;

