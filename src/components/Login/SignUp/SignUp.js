import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import "./SignUp.css"
import {auth} from "../../../firebase/firebase"
import { useDispatch } from 'react-redux'
import {login} from "../../../features/userSlice"
import {db} from "../../../firebase/firebase"

function SignUp() {

    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
     const [nameErr,setNameErr] = useState("");
     const [emailErr,setEmailErr] = useState("");
   const [passwordErr,setPasswordErr] = useState("");
    const history = useHistory()

    const dispatch = useDispatch();

    const register = (e) => {
        e.preventDefault()
      if(!name){
          setNameErr("Please enter the name")
      }
      if(name.length >0 && name.length <2){
          setNameErr("Must contain minimum 3 characters")
      }
      if(!email.includes("@gmail.com" ||"@outlook.com")){
               setEmailErr("Enter valid email")
      }
       
      if(password.length<5){
      setPasswordErr("Minimum 6 characters required")
      }


     

         auth.createUserWithEmailAndPassword(email,password).then((userAuth) => {
             userAuth.user.updateProfile({
                 displayName:name,
             }).then(() => {
             dispatch(
                 login({
                   email:userAuth.user.email,
                   uid: userAuth.user.uid,
                   displayName:name,
                   
                 })
             )

             })
         }).then(()=> history.push("/")).catch((err)=> alert(err)).then(()=> {db.collection("users").add({
             name:name
         })})
    }

    


    return (
        <div className="signup">
        <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" alt="" />    


        <form >
        <p>{nameErr}</p>
            <input type="text" placeholder="Full Name(required if registering)" value={name}  onChange={(e) => {setName(e.target.value)}} />
                 
                
                            
            <p>{emailErr}</p> 
 <input type="email" placeholder="Email" value={email}  onChange={(e) => {setEmail(e.target.value)}} />
 <p>{passwordErr}</p>          
 <input type="password" placeholder="Password" value={password}  onChange={(e) => {setPassword(e.target.value)}} />
      
 <button onClick= {register} type="submit">Sign In</button>

            </form>
            
 <p >Already a member? <span className="signup__login" onClick={() => history.push("/login")}>SignIn</span></p>
        </div>
        
    )
}

export default SignUp













    