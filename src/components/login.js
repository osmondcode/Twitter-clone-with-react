import Logo from "../images/logo.png";
import '../style.css'


const LogIn = () => {
    return ( 
        <div className="Login">
          <p>
            <nav className="Nav">
                  <span className="LogoSpan">
                       <img src={Logo}  alt="" className="Logo"/>
                       RON
                  </span>
                  <span className="LoginLink">
                      <button>Log In</button>
                      <button>Sign Up</button>
                  </span>
             </nav>
              <div className="Form-Container">
                 <div className="Form">
                    <h1>Welcome Back!</h1>
                    <p>Sign In to continue</p>
                    <input type="email" placeholder="Enter your email"/>
                    <input type="password" placeholder="Enter your password"/>
                    <button>Sign In</button>
                    <p className="or">Or</p>
                    <h3>Don't have an account? <button>Sign Up</button></h3>
               </div>
              </div>
            </p>
        </div>
     );
}
 
export default LogIn;