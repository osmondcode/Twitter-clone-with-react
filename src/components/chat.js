import SideBar from "../chat components/sidebar";
import MessageChat from "../chat components/MessageChat";

const Chat = () => {
    return ( 
        <div className="Chat">
            <SideBar />
            <MessageChat />
        </div>
     );
}
 
export default Chat;