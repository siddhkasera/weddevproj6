import '../assets/css/AppFooter.css'
// import '../assets/css/global.css'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright} from '@fortawesome/free-solid-svg-icons';




function AppFooter(){
return(

    <footer className="container">
        <section className="links">
            <FontAwesomeIcon icon={faCopyright} style={{position:"relative", right:"-12px", top:"-1px"}} />
            {/*<i className="fa fa-copyright" style={{position:"relative", right:"-12px", top:"-1px"}}></i>*/}
            <b style={{fontSize:"23px", fontFamily: "Rasa"}} className="flex-items"> 2023 SK Books </b>
            <a style={{fontSize:"23px", fontFamily:"Rasa"}} className="flex-items">About </a>
            <a style={{fontSize:"23px", fontFamily:"Rasa"}} className="flex-items">Contact </a>
            <a style= {{fontSize:"23px", fontFamily:"Rasa"}} className="flex-items">Directions </a>
        </section>
        <section className="follow-us-text">
            <b style ={{fontSize:"18px"}} className="follow-text">FOLLOW US</b>
            <section className="social-media-icons">
                {/*<i className="fa-brands fa-facebook-f fa-2xl"></i>*/}
                {/*<i className="fa-brands fa-x-twitter fa-2xl"></i>*/}
                {/*<i className="fa-brands fa-instagram fa-2xl"></i>*/}
                <FontAwesomeIcon icon={faFacebook} fontSize={35}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faXTwitter} fontSize={35}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faInstagram} fontSize={35}></FontAwesomeIcon>


            </section>
        </section>
    </footer>

)
}
export default AppFooter;
