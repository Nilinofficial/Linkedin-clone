import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from "./components/Header/Header"
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import SignUp from './components/Login/SignUp/SignUp';
import { auth } from './firebase/firebase';
import { useDispatch } from 'react-redux';
import {  BrowserRouter as Router,  Switch,  Route,} from "react-router-dom";




function App() {
  const dispatch = useDispatch();
   const user = useSelector(selectUser)


  useEffect(() => {
     auth.onAuthStateChanged((userAuth) => {
       if(userAuth) {
          dispatch(login({
            email:userAuth.email,
            uid:userAuth.uid,
            displayName:userAuth.displayName
          }))
       }
       else {
        dispatch(logout())
       }
     })
  },[])




  return (

     <Router>

           

    <div className="app">
       <Switch> 
         <Route exact path ="/">

         {
         !user ?  <Login/>
         :
                (
                  <>
                  <Header/>
                  <div className="app__body">
                  <Sidebar/>
                  <Feed/>
                </div>
                </>
                )
        
       }
         </Route>
         <Route path  = "/login">
           <Login/>   
         </Route>

         <Route path  = "/signup">
           <SignUp/>   
         </Route>
      
        </Switch>
    </div>
    </Router>
  );
}

export default App;
