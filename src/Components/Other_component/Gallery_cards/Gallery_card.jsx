import "./Gallery_card.css";

export default function GllaryCard(props){
    return(
        <div className="gallery_card_container">

            <div className="card_main_body">
                <div className="mainImg_container">
                    <img src={props.main_img} alt="" />
                </div>

                <div className="gallery_info_container">
                    <div>
                        <img src={props.another_img1} alt="" />
                    </div>

                    <div>
                        <img src={props.another_img2} alt="" />
                    </div>

                    <div className="gallery_size_no">
                        <p>{props.Gallary_size}+</p>
                    </div>
                </div>
            </div>

            <div className="gallery_card_footer">
                <p className="gallery_name">{props.Gallary_name}</p>
                <div > <img src={props.profile_pic} alt="" /> <p> {props.Gallery_creater}</p></div>
            </div>
        </div>
    )
}