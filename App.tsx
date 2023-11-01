import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Home from './components/Home'
import CategoryBookList from './components/CategoryBookList';
import {useContext} from "react";
import axios from 'axios';
import {useEffect, useState} from "react";
import {CategoryItem} from "./types";
import {
    BrowserRouter as Router,
    Routes,
    Route, useParams,
} from "react-router-dom"
import CategoryNav from "./components/CategoryNav";
import {Category} from "./contexts/CategoryContext";



function App() {
    // const [categories, setCategories]
    //     = useState([]);
    // const [bookList, setBooks ] = useState([]);
    const {id} = useParams();

    // useEffect(() =>{
    //     axios.get('/SiddhiBookstoreReactState/api/categories')
    //         .then((result) => setCategories(result.data))
    //         .catch(console.error);
    // },[]);

    // useEffect(() => {
    //     axios.get(`http://localhost:8080/SiddhiBookstoreReactFetch/api/categories/name/${id}/books/`)
    //         .then((result)=> setBooks(result.data))
    //         .catch(console.error);
    // }, []);


    // let paths =[
    //     'http://localhost:8080/SiddhiBookstoreReactFetch/api/categories',
    //     'http://localhost:8080/SiddhiBookstoreReactFetch/api/categories/1001/books'
    // ]
    // axios.all(paths.map((path) => axios.get(path)))
    //     .then((response) => console.log(response))
    //     .catch((error) => console.log(error))

    const categories = useContext<CategoryItem[]>(Category);

  return (
      <Router basename={"SiddhiBookstoreReactState"}>
        <AppHeader  />
        <Routes>home
          <Route path="/" element={<Home />} />
            <Route path="/categories" element={<CategoryBookList />} >
                <Route path=":id" element={<CategoryBookList />} />
                {/*<Route path=":id" element={<CategoryNav catList ={categories}/> } />*/}
            </Route>
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>

        <AppFooter />

      </Router>
  );
}

export default App;

