import "./Adventures.css";
import AdventureCard_img_1 from "../Assets/Images/AdventureCard_img1.png";
import AdventureCard_img_2 from "../Assets/Images/AdventureCard_img2.png";
import AdventureCard_img_3 from "../Assets/Images/AdventureCard_img3.png";

import AdventureCard from "./Other_component/Adventure_card/AdventureCard";


export default function Adventures() {
  return (
    <div className="adventure_section_container" id="Features_Section">
      <div className="background_img_container"></div>

      <h1>Key Features</h1>
      
    <div className="outer_feature_container">
      <div className="feature_cards_container">
        <AdventureCard
          imgPath={AdventureCard_img_1}
          userName="Gaming Platform"
        />
        <AdventureCard
          imgPath={AdventureCard_img_2}
          userName="Metaverse on Memes"
        />
        <AdventureCard
          imgPath={AdventureCard_img_3}
          userName="NFT Marketplace"
        />
      </div>
      </div>
    </div>
  );
}
