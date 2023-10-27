import './style.css'
import vk from "../../image/iconfinder_vk_834714 2.svg";
import inst from "../../image/iconfinder_instagram_circle_color_107172 2.svg";
import twit from "../../image/iconfinder_twitter_834708 2.svg";
import fb from "../../image/layer1.svg";
import you from "../../image/iconfinder_youtube_287514 2.svg";

function Footer(){
    return (
        <footer>
        <ul>
            <li><a href="#" id="left_element">Корзина</a></li>
            <li><a href="#" id="logo">Teashop</a></li>
            <li><a href="#" id="right_element">Акаунт</a></li>
        </ul>
        <div id="line"></div>
        <div className="social">
            <a href="#"> <img src={vk} alt=""/></a>
            <a href="#"> <img src={inst} alt=""/></a>
            <a href="#"> <img src={twit} alt=""/></a>
            <a href="#"> <img src={fb} alt=""/></a>
            <a href="#"> <img src={you} alt=""/></a>
        </div>
    </footer>
    )
}

export default Footer;