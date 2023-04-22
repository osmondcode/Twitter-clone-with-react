import UserPhoto from "../images/picture 1.png";
import Logo from "../images/logo.png";

import InboxChat from "../chat components/InboxChat";


const Sidebar = () => {
    return ( 
        <div className="Sidebar">
            <div className="Sidebar-Nav">
                <span className="LogoSpan mainLogo">
                       <img src={Logo}  alt="" className="Logo"/>
                       RON
                  </span>
                <span className="user-info">
                    <img src={UserPhoto} alt=""/>
                    <h3>Coder</h3>
                    <button> Logout</button>
                </span>
            </div>

            <div className="InboxList">
                <span>
                    <input type="text" placeholder="Find a user..." />
                </span>
                <span>
                    <InboxChat />
                </span>
            </div>
            <div></div>
        </div>
     );
}
 
export default Sidebar;