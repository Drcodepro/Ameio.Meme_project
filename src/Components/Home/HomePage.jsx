
import "./HomePage.css"
import LandingPage from "../LandingPage";
import FeaturedSection from "../FeaturedSection";
import Adventures from "../Adventures";
import Gallery from "../Nft_gallery";
import Metaverse from "../Metaverse";
import Tokenomics from "../Tokenomics";
import RoadMap from "../RoadMap";
export default function HomePage(){
    return(
        <div className="HomePage_container">
            <LandingPage/>
            <FeaturedSection/>
            <Adventures/>
            <Gallery/>  
            <Metaverse/>
            <Tokenomics/>
            <RoadMap/>
        </div>
    )
}