import "./AdventureCard.css";

export default function AdventureCard(props){

    const cardStyle = {   
        backgroundImage: `url(${props.imgPath})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
    };

    return(
        <div className="adventure_Card_container">
            <div className="card_info_contaner" style={cardStyle}>
                {/* <p className="card_userName">{props.userName}</p>
                <p className="card_userInfo">{props.userInfo}</p> */}
            </div>
            <div className="card_follower_container">
                <i className="fa-solid fa-fire"></i>
                <p>{props.userName}</p>
            </div>
        </div>
    )
}