
// import HomeCategoryList from './HomeCategoryList';
import '../assets/css/global.css';
import '../assets/css/Home.css';
// import {CatProp} from "../types";
import image1 from '../assets/images/site_1/lessons in chemistry.webp';
import image2 from '../assets/images/site_1/american prometheus.webp';
import image3 from '../assets/images/site_1/born a crime.webp';
import image4 from '../assets/images/site_1/Atomic Habits.jpg';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";





function Home() {
    return (

        <div className="home-page">
            <section  className="color">
                <h2  style = {{fontSize:"30px", fontFamily:"Georgia, Times New Roman, Times, serif", marginLeft:"150px", marginTop: "15px"}}>Welcome to SK Books! We are delighted to have you here.</h2>
                <hr style={{width:"107%",marginLeft:"10px"}} />
            </section>
            <div className ="welcome-msg">
                <h2  style ={{fontSize:"30px", fontFamily:"Georgia, Times New Roman, Times, serif",marginLeft:"475px",marginTop: "15px"}}>Best Sellers</h2>

            </div>
            <section className="bestseller-image">
                <div className="bestseller-image-items">

                        <img
                            src={image1}
                            alt="Lessons in Chemistry"
                            width="200px"
                            height="275px"
                        />


                        <img
                            src={image2}
                            alt="American Prometheus"
                            width="200px"
                            height="275px"
                        />


                        <img
                            src={image3}
                            alt="Born a Crime"
                            width="200px"
                            height="275px"
                        />


                        <img
                            src={image4}
                            alt="Atomic Habits"
                            width="200px"
                            height="475px"
                        />
                </div>
            </section>
            <div className ="buynow">
              <Link to= '/categories/Crime'><button  className="buy-now-button">Buy Now</button>  </Link>

            </div>
        </div>





    )
}

export default Home;
