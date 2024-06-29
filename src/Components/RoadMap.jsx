import "./RoadMap.css";

import roadmap_img1 from "../Assets/Images/Roadmap_imgs/roadmap_img_01.png";
import roadmap_img2 from "../Assets/Images/Roadmap_imgs/roadmap_img_02.png";
import roadmap_img3 from "../Assets/Images/Roadmap_imgs/roadmap_img_03.png";
import roadmap_img4 from "../Assets/Images/Roadmap_imgs/roadmap_img_04.png";
// import roadmap_img5 from "../Assets/Images/Roadmap_imgs/roadmap_img_5.jpg";

export default function RoadMap() {
  return (
    // <div className="roadmap_section_container">
    //     <h1>Roadmap to Success</h1>
    //     <p>Our roadmap outlines the growth and development of AMEIO MEME</p>

    //     <div className="roadmap_points_container">
    //         <div className="roadmap_point">
    //             <div className="roadmap_info">
    //                 <p className=" point_heading  font-semibold w-fit">Childhood Ameio</p>
    //                 <ul className="list-disc">
    //                     <li>Ideation of Meme & Gaming System</li>
    //                 </ul>
    //             </div>
    //             <div className="roadmap_phase phase1">
    //                 <img loading="lazy" src={roadmap_img1} alt="" className="roadmap_img"/>
    //             </div>
    //         </div>

    //         <div className="roadmap_point">
    //            <div className="roadmap_phase phase2">
    //            <img loading="lazy" src={roadmap_img2} alt="" className="roadmap_img"/>
    //            </div>
    //             <div className="roadmap_info">
    //                 <p className="point_heading text-2xl font-semibold w-fit">Teenage Ameio</p>
    //                 <ul className="list-disc">
    //                     <li>Development Phase </li>
    //                 </ul>
    //             </div>
    //         </div>

    //         <div className="roadmap_point">
    //             <div className="roadmap_info">
    //                 <p className=" point_heading text-2xl font-semibold w-fit"> GenZ Ameio</p>
    //                 <ul className="list-disc">
    //                     <li>Staking System Implementation</li>
    //                     <li>Launch of NFTs Marketplace</li>
    //                 </ul>
    //             </div>
    //             <div className="roadmap_phase phase3">
    //             <img loading="lazy" src={roadmap_img3} alt="" className="roadmap_img"/>

    //             </div>
    //         </div>

    //         <div className="roadmap_point">
    //            <div className="roadmap_phase  phase4">
    //            <img loading="lazy" src={roadmap_img4} alt="" className="roadmap_img"/>

    //            </div>
    //             <div className="roadmap_info">
    //                 <p className="point_heading text-2xl font-semibold w-fit">Adulthood Ameio</p>
    //                 <ul className="list-disc">
    //                     <li>Launch of Gaming System </li>
    //                     <li>Integration of Metaverse Features</li>

    //                 </ul>
    //             </div>
    //         </div> */}

    //         {/* <div className="roadmap_point">
    //             <div className="roadmap_info">
    //                 <p className=" point_heading text-2xl font-semibold w-fit"> Platform Testing</p>
    //                 <ul className="list-disc">
    //                     <li>Beta testing of gaming platform and NFT features </li>
    //                     <li>Community feedback and bug fixes</li>
    //                 </ul>
    //             </div>
    //             <div className="roadmap_phase phase3">
    //             <img loading="lazy" src={roadmap_img5} alt="" className="roadmap_img"/>

    //             </div>
    //         </div> */}

    //     </div>
    // </div>

    <div className="roadmap_section_container" id="RoadMap_Section">

      <h1>RoadMap</h1>
      <p>Our roadmap outlines the growth and development of AMEIO MEME</p>

      <div className="outer_roadmap_container">
        <div className="roadmap_points_container">
          <div className="roadmap_point">
            <div className="roadmap_phase phase1">
              <img loading="lazy" src={roadmap_img1} alt="" className="roadmap_img" />
            </div>
            <div className="roadmap_info">
              <p className=" point_heading  font-semibold w-fit">
                Childhood Ameio
              </p>
              <ul className=" list-disc ">
                <li>Ideation of Meme Culture </li>
                <li>Ideation of Gaming System</li>
              </ul>
            </div>
            
          </div>

          <div className="roadmap_point">
            <div className="roadmap_phase phase2">
              <img loading="lazy" src={roadmap_img2} alt="" className="roadmap_img" />
            </div>
            <div className="roadmap_info">
              <p className="point_heading text-2xl font-semibold w-fit">
                Teenage Ameio
              </p>
              <ul className="list-disc">
                <li>Development Phase </li>
              </ul>
            </div>
          </div>

          <div className="roadmap_point">
          <div className="roadmap_phase phase3">
              <img loading="lazy" src={roadmap_img3} alt="" className="roadmap_img" />
            </div>
            <div className="roadmap_info">
              <p className=" point_heading text-2xl font-semibold w-fit">
                {" "}
                GenZ Ameio
              </p>
              <ul className="list-disc">
                <li>Staking System Implementation</li>
                <li>Launch of NFTs Marketplace</li>
              </ul>
            </div>
            
          </div>

          <div className="roadmap_point">
            <div className="roadmap_phase  phase4">
              <img loading="lazy" src={roadmap_img4} alt="" className="roadmap_img" />
            </div>
            <div className="roadmap_info">
              <p className="point_heading text-2xl font-semibold w-fit">
                Adulthood Ameio
              </p>
              <ul className="list-disc">
                <li>Launch of Gaming System</li>
                <li>Integration of Metaverse Features</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
