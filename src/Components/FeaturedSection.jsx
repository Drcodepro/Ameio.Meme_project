import "./FeaturedSection.css";
import feature_img1 from "../Assets/Icons/feartured_img1.png";
import feature_img2 from "../Assets/Icons/feartured_img2.png";
import feature_img3 from "../Assets/Icons/feartured_img3.png";
import feature_img4 from "../Assets/Icons/feartured_img4.png";
import feature_img5 from "../Assets/Icons/feartured_img5.png";
import feature_img6 from "../Assets/Icons/feartured_img6.png";
import meme_img from "../Assets/Images/Meme_img.png";
import meme_fox from "../Assets/Images/Meme_fox.webp";
import fox_img from "../Assets/Images/Baby_fox.webp";

export default function FeaturedSection(){

    return(
        <div className="Featured_Section_container">
            <div className="main_container">
                <h1>About Amieo</h1>
                {/* <div className="featured_Head">
                    <h1>Featured In</h1>
                    
                    <div className="featured_slider_container">
                        <div className="featured_companies">
                            <img src={feature_img1} alt="" />
                            <img src={feature_img2} alt="" />
                            <img src={feature_img3} alt="" />
                            <img src={feature_img4} alt="" />
                            <img src={feature_img5} alt="" />
                            <img src={feature_img6} alt="" />

                            <img src={feature_img1} alt="" />
                            <img src={feature_img2} alt="" />
                            <img src={feature_img3} alt="" />
                            <img src={feature_img4} alt="" />
                            <img src={feature_img5} alt="" />
                            <img src={feature_img6} alt="" />
                        </div>
                    </div>        
                </div> */}

{/* about ameio.meme */}
                <div className="featured_info_container">
                    <div className="featured_info">
                        <p>AMEIO MEME is a groundbreaking project that brings together the worlds of gaming, NFT memes, and the metaverse to create a vibrant, dynamic ecosystem.</p>
                    </div>
                    <div className="featured_img">
                        <img src={fox_img} alt="" />
                    </div>
                </div>

{/* why choice us section */}
                <div className="why_info_container mb-[4rem]">
                     <h1 className="mb-[3rem]">Why Invest in Ameio Meme?</h1>

                    <div className="why_info">
                        <ul>
                            <li><p><strong>Innovative Ecosystem:</strong> Combining the best of gaming, NFTs, and the metaverse, AMEIO MEME offers a unique platform that empowers creators and rewards community participation.</p></li>
                            <li><p><strong>High Growth Potential:</strong> With a projected 10000X increase in token value within the first year, AMEIO MEME presents a promising investment opportunity.</p></li>
                            <li><p><strong>Early Bird Benefits:</strong> Join our presale to enjoy exclusive airdrop benefits and get in at the ground floor of a groundbreaking project.</p></li>

                        </ul>
                    </div>
                </div>


{/* combination meme section */}

                {/* <div className="meme_container">
                    <h1>Combination of Various Meme </h1>
                    <img src={meme_img} alt="" className="meme_img" />
                    <img src={meme_fox} alt="" className="meme_cat_img"/>
                </div> */}
            </div>
            
        </div>
    )
}