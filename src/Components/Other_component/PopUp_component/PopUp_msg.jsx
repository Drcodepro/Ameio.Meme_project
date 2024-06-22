
import './PopUp_msg.css'; 

export default function PopUpMsg (props){
  return (
   
      <div className="Pop_up_container">
        <p>Presale Comming Soon!</p>
        <span className="PopUp_close-button" onClick={props.onClose}>ok</span>
      </div>
  );
}


