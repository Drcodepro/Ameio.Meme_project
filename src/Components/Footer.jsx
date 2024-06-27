import "./Footer.css";
import ameio_logo from "../Assets/Icons/amieo_logo_nav.png";
import facebook_icon from '../Assets/Icons/socialMedia_icon/facebook_icon_0.png';
import insta_icon from '../Assets/Icons/socialMedia_icon/insta_icon_0.png';
import twitter_icon from '../Assets/Icons/socialMedia_icon/twitter_icon_0.png';
// import linkedin_icon from '../Assets/Icons/socialMedia_icon/linkedin_icon.png';
import youtube_icon from '../Assets/Icons/socialMedia_icon/youtube_icon_0.png';
import mail_icon from '../Assets/Icons/socialMedia_icon/mail_icon_0.png';
import telegram_icon from '../Assets/Icons/socialMedia_icon/telegram_icon_0.png';

export default function Footer() {
  return (
    <div className="Home_footer_section" id="Footer_Section">
      <div className="footer_mainContent">

        <div className="Home_footer_info">
          <div className="Home_Footer_logo_container">
            <img src={ameio_logo} alt="logo" className="footer_logo" />
          </div>
          <div className="footer_info">Get involved early by participating in our presale and become a part of the Ameio.Meme community.</div>
        </div>

        {/* <div className="About_us">
          <h2>About Us</h2>
          <p>Amieo</p>
          <p>Careers</p>
          <p>Contact us</p>
        </div>
         */}
        <div className="contact_us">
          <h2>Contact Us</h2>
          <div className="social_media_icons">
            <a href="mailto:ameiomeme@gmail.com"><img src={mail_icon} alt="" /></a>
            <a href="https://x.com/ameio_meme"><img src={twitter_icon} alt="" /></a>
            <a href="https://t.me/ameio_memecommunity"><img src={telegram_icon} alt="" /></a>
            <a href="https://www.facebook.com/ameiomeme/"><img src={facebook_icon} alt="" /></a> 
            <a href="https://www.instagram.com/ameio_meme/"><img src={insta_icon} alt="" /></a> 
            <a href="https://www.youtube.com/@Ameio_Meme"><img src={youtube_icon} alt="" /></a>
            
            {/* <a href=""><img src={linkedin_icon} alt="" /></a>  */}
          </div>
        </div>

      </div>

      <hr />

      <div className="footer_rights">
        <div className="rights">
          <p>@2024 by Ameio.Meme All rights reserved </p>
        </div>
      </div>
    </div>
  );
}
