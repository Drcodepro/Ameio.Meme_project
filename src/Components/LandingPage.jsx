import "./LandingPage.css";
import animal_landing from "../Assets/Images/animal_landing_img.webp";
export default function LandingPage(){
    return(
        <div className="LandingPage_container">
            <img loading="lazy" src={animal_landing} alt="" />
            <div className="Landing_page_bg_container">

            </div>
        </div>
    )
}