import './style.css'
import vk from "../../image/iconfinder_vk_834714 2.svg";
import inst from "../../image/iconfinder_instagram_circle_color_107172 2.svg";
import twit from "../../image/iconfinder_twitter_834708 2.svg";
import fb from "../../image/layer1.svg";
import you from "../../image/iconfinder_youtube_287514 2.svg";
import {Link} from "react-router-dom";

function Footer(){
    return (
        <footer>
        <ul>
            <li><Link to="/bag" id="left_element">Корзина</Link></li>
            <li><Link href="/" id="logo">Teashop</Link></li>
            <li><Link href="/login" id="right_element">Акаунт</Link></li>
        </ul>
        <div id="line"></div>
        <div className="social">
            <Link to="/404"> <img src={vk} alt=""/></Link>
            <Link to="/404"> <img src={inst} alt=""/></Link>
            <Link to="/404"> <img src={twit} alt=""/></Link>
            <Link to="/404"> <img src={fb} alt=""/></Link>
            <Link to="/404"> <img src={you} alt=""/></Link>
        </div>
    </footer>
    )
}

export default Footer;