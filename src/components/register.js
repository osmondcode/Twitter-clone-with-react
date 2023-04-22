import Logo from "../images/logo.png";
import File from "../images/add file.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,storage } from "../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
// import ReactDOM from 'react-dom/client';





const Register = () => {
     const [err,setErr] = useState(false)
     const handlesubmit = async (e) => {
          e.preventDefault()
          const displayName = e.target[0].value;
          const email = e.target[1].value;
          const password = e.target[2].value;
          const file = e.target[3].files[0];
          
          
          try{
               const res = await createUserWithEmailAndPassword(auth, email, password)
               const storageRef = ref(storage, displayName);

               const uploadTask = uploadBytesResumable(storageRef, file);

               uploadTask.on(
                    (error) => {
                    setErr(true)
               },
                    () => {
                         getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
                              await updateProfile(res.user,{
                                   displayName,
                                   photoURL: downloadURL,
                              });
                              await setDoc(doc(db,'users', res.user.uid), {
                                        uid: res.user.uid,
                                        displayName,
                                        email,
                                        photoURL: downloadURL,
                                   }, alert(setDoc));
                         });
                    }
                    );
                    
          }catch(err){
               setErr(true);
          }

     }

    return ( 
        <div className="Register">
             <p>
            <nav className="Nav">
                  <span className="LogoSpan">
                       <img src={Logo}  alt="" className="Logo"/>
                       RON
                  </span>

             </nav>
              <div className="Form-Container">
                 <form onSubmit={handlesubmit} className="Register-Form">
                    <h2>Sign up to begin</h2>
                    <input type="text" placeholder="Enter a username"/>
                    <input type="email" placeholder="Enter your email"/>
                    <input type="password" placeholder="Enter your password"/>
                    <input type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={File} alt=""/>
                        <p>Add an avater</p>
                    </label>
                    <button>Register</button>
                    {err && <span>Something went wrong</span>}
                    <p className="or">Or</p>
                    <h3>have an account? <button>Sign in</button></h3>
               </form>
              </div>
            </p>
        </div>
     );
}
export default Register;