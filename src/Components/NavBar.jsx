import "./NavBar.css";
import ameio_logo from "../Assets/Icons/amieo_logo_nav.png";
import { NavLink} from "react-router-dom";
import { useState } from "react";
import PopUpMsg from "./Other_component/PopUp_component/PopUp_msg.jsx";

export default function NavBar(){
    const [isvisible,setisvisible] = useState(false);
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const handleBuyNowClick = () => {
        handleshowPopUp();
        handleIsVisible();
      };

    const handleshowPopUp = () => {
        setIsPopUpOpen(true);
      };
    
      const closePopUp = () => {
        setIsPopUpOpen(false);
      };

    function handleIsVisible(){
        setisvisible(!isvisible);
    }

    return(
    <div className=" nav_container text-white text-sm flex justify-between items-center gap-10 pt-2 pb-2 pr-9 pl-9 h-fit w-screen z-10">
        {/* <div className="w-fit h-fit flex items-center gap-28"> */}
            <img src={ameio_logo} alt="" />
            <div  className={`${isvisible  ?  "none" :"navIsHidden "} nav_navigation_container flex items-center w-fit  gap-12 text-sm`}>
                <NavLink to="" 
                className={({isActive}) =>
                    ` ${isActive ? "text-amber-600 text-[0.8rem] ":"null"}`}
                ><div className="nav_navigation">HOME</div></NavLink>

                <div className="nav_navigation"  onClick={handleIsVisible} >STUDIO</div>

                <div className="nav_navigation"  onClick={handleIsVisible} >SERVICES</div>

                {/* <NavLink to="BuyTokens"
                className={({isActive}) =>
                    ` ${isActive ? "text-amber-600 text-sm":"null"}`}
                > <div className="nav_navigation flex">BUY TOKENS</div></NavLink> */}

                <div className="nav_navigation flex" onClick={handleBuyNowClick}>BUY TOKENS</div>
                
                <div className="nav_navigation"  onClick={handleIsVisible} >CONTACT</div>
                
                <div className="nav_navigation"  onClick={handleIsVisible} >FAQs</div>
            </div>
        {/* </div> */}

        <div className="buy_button"> 
        {/* <NavLink to="BuyTokens" onClick={handleshowPopUp}> <button>Buy Now</button></NavLink> */}
        <button onClick={handleshowPopUp} >Buy Now</button>
        </div>

        <div className= "toggle_nav_button" onClick={handleIsVisible}>
        <i className="fa-solid fa-bars fa-xl"></i>        
        </div>

{/* pop up msg */}

        {isPopUpOpen && <PopUpMsg onClose={closePopUp} />}

    </div>)     
}