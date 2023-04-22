import SenderPhoto from "../images/picture 2.jfif";
import ReceiverPhoto from "../images/picture 1.png";

const Messages = () => {
    return ( 
        <div className="Messages">
            <div className="receive">
                <img src={SenderPhoto} alt="" className="SenderPhoto"/>
                <div className="MessageInfo">
                    <p>Hello Mr Coder.. I will like to be a Worker of TRON</p>
                    <h5 className="MessageTime">Just now</h5>
                </div>
            </div>
            <div className="send">
                <div className="MessageInfo">
                    <p>Okay... but i have a few questions for you, <br/> what are your qualifications.. <br/> how amny years of expereince do you have? <br/> what do you think you can offer to this organization</p>
                    <h5 className="MessageTime">Just now</h5>
                </div>
                <img src={ReceiverPhoto} alt="" className="SenderPhoto"/>
            </div>
            <div className="receive">
                <img src={SenderPhoto} alt="" className="SenderPhoto"/>
                <div className="MessageInfo">
                    <p>First of all my qualifications are my degree in programming <b/> i have 3 years of expereince... <br/> and i can offer progress to this organization by providing useful ideas in order to see this company grow</p>
                    <h5 className="MessageTime">Just now</h5>
                </div>
            </div>
            <div className="receive">
                <img src={SenderPhoto} alt="" className="SenderPhoto"/>
                <div className="MessageInfo">
                    <p>Hello Mr Coder.. I will like to be a Worker of TRON</p>
                    <h5 className="MessageTime">Just now</h5>
                </div>
            </div>
            <div className="send">
                <div className="MessageInfo">
                    <p>Okay... but i have a few questions for you, <br/> what are your qualifications.. <br/> how amny years of expereince do you have? <br/> what do you think you can offer to this organization</p>
                    <h5 className="MessageTime">Just now</h5>
                </div>
                <img src={ReceiverPhoto} alt="" className="SenderPhoto"/>
            </div>
            <div className="receive">
                <img src={SenderPhoto} alt="" className="SenderPhoto"/>
                <div className="MessageInfo">
                    <p>First of all my qualifications are my degree in programming <b/> i have 3 years of expereince... <br/> and i can offer progress to this organization by providing useful ideas in order to see this company grow</p>
                    <h5 className="MessageTime">Just now</h5>
                </div>
            </div>
        </div>
     );
}
 
export default Messages;