import "./Adventures.css";
import AdventureCard_img_1 from "../Assets/Images/AdventureCard_img1.png";
import AdventureCard_img_2 from "../Assets/Images/AdventureCard_img2.png";
import AdventureCard_img_3 from "../Assets/Images/AdventureCard_img3.png";

import AdventureCard from "./Other_component/Adventure_card/AdventureCard";

import gamImg1 from "../Assets/Images/Adventure_images/g1.webp";
import gamImg2 from "../Assets/Images/Adventure_images/g2.webp";
import gamImg3 from "../Assets/Images/Adventure_images/g3.webp";
import gamImg4 from "../Assets/Images/Adventure_images/g4.webp";
import gamImg5 from "../Assets/Images/Adventure_images/g5.webp";
import gamImg6 from "../Assets/Images/Adventure_images/g6.webp";


const imgPathGameArr = [gamImg1,gamImg2,gamImg3,gamImg4,gamImg5,gamImg6];

export default function Adventures() {

  return (
    <div className="adventure_section_container" id="Features_Section">
      <div className="background_img_container"></div>

      <h1>Key Features</h1>
      
    <div className="outer_feature_container">
      <div className="feature_cards_container">
        
        <AdventureCard
          imgPath={imgPathGameArr}
          userName="Amieo Gaming Platform"
        />
        <AdventureCard
          imgPath={imgPathGameArr}
          userName="Amieo Metaverse"
        />
        <AdventureCard
          imgPath={imgPathGameArr}
          userName="Amieo NFT Collection"
        />
      </div>
      </div>
    </div>
  );
}
