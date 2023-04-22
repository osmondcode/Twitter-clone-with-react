import { FaVideo, FaUserPlus, FaListUl, FaSmile, FaPaperPlane, FaPaperclip } from "react-icons/fa";
import SenderPhoto from "../images/picture 2.jfif";
import Messages from "./messages";

const MessageChat = () => {
    return ( 
        <div className="MessageChat">
            <nav>
                <div className="NameSection">
                    <img src={SenderPhoto} alt="" className="SenderPhoto"/>
                    <div>
                        <h4>Hacker_Joe</h4> 
                        <p>Active now</p>
                    </div>
                </div>
                <span>
                    <p><FaVideo className="icons"/></p>
                    <p><FaUserPlus className="icons"/></p>
                    <p><FaListUl className="icons "/></p>
                </span>
            </nav>
            <div className="MessageTyping">
                <button className="emoji"><FaSmile /></button>
                <input type="message" placeholder="Type a message"/>
                <input type="file" id="fiLe"/>
                <label htmlFor="fiLe">
                    <FaPaperclip />
                </label>
                <button className="SendBtn"><FaPaperPlane/></button>
            </div>
            <Messages/>
        </div>
     );
}
 
export default MessageChat;