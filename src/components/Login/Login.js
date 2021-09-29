import React,{useState} from 'react'
import "./Login.css"
import {useHistory} from 'react-router-dom'
import {auth} from "../../firebase/firebase"

function Login() {
   
const [email, setEmail] = useState("");
const [password,setPassword] = useState("");
const history = useHistory()


const login = (e) => {
  e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((err) => alert(err.message)).then(()=> {history.push("/")})
  

}



    return (
        <div className="login">
            <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" alt="" />




 <form >

 

 <input type="email" placeholder="Email" value={email}  onChange={(e) => {setEmail(e.target.value)}} />
 <input type="password" placeholder="Password" value={password}  onChange={(e) => {setPassword(e.target.value)}} />

 <button onClick={login} type="submit">Sign In</button>


 </form>

 <p >Not a member? <span className="login__register" onClick={() => history.push("/signup")}>Register Now</span></p>

        </div>
    )
}

export default Login
