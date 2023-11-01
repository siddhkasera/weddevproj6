import {CategoryItem} from "../types";
import {createContext, useEffect, useState, ReactNode} from "react";
import axios from "axios";
// import { ReactNode } from "react";


export const Category = createContext<CategoryItem[] | []>([]);
Category.displayName ='CategoryContext';



function CategoryContext (props: { children: ReactNode })  {

    const [categories, setCategories]
        = useState([]);

    useEffect(() =>{
        axios.get('/SiddhiBookstoreReactState/api/categories')
            .then((result) => setCategories(result.data))
            .catch(console.error);
    },[]);

    // cut/paste the categories code here from the App component

    return (
        <Category.Provider value ={categories}>{props.children}</Category.Provider>
    );
}
export default CategoryContext;