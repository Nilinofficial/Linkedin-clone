import React,{useState,useEffect} from 'react'
import "./Feed.css"
import {Avatar} from "@material-ui/core"
import FeedInputOptions from './FeedInputOptions/FeedInputOptions'
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post/Post';
import { db } from '../../firebase/firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import FlipMove from 'react-flip-move';


function Feed() {
    const time = new Date()
    var hour = time.getHours();
    var minutes = time.getMinutes();
   

    const user = useSelector(selectUser)

const[posts,SetPosts] = useState([])
const[message,setMessage] = useState("")

useEffect(()=> {
      db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) => (
          SetPosts(snapshot.docs.map((doc)=> (
              {
                 id: doc.id,
                 data:doc.data()

              }
          )))
      ))
},[])



const sendPost = (e) => {
    e.preventDefault()

     db.collection("posts").add({
         name:user.displayName,
         description: user.email,
         message : message,
         photoUrl: "",
         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
         hour:  hour,
         minutes:minutes
     })

     setMessage("")




}
    
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                <Avatar className ="feed__inputAvatar" src="https://nilinofficial.live/images/Nilindp.png"/>
                  <form>
                      <input type="text" placeholder="Start a post" value={message} onChange= {(e)=> {setMessage(e.target.value)}}/>
                      <button onClick={sendPost} type="submit">Send</button>
                  </form>
                
                </div>
                <div className="feed__inputOptions">
                    <FeedInputOptions title="Photo" Icon = {ImageIcon} color ="#70b5f9"/>
                    <FeedInputOptions title="Video" Icon = {SubscriptionsIcon} color ="#E7A33E"/>
                    <FeedInputOptions title="Event" Icon = {EventNoteIcon} color ="#C0CBCD"/>
                    <FeedInputOptions title="Write article" Icon = {CalendarViewDayIcon} color ="#7FC15E"/>
                </div>
              
            </div>
      
           <FlipMove> 
           {posts.map(({id, data : {name,description,message,photoUrl,hour}})=> (
                <Post  
                key ={id}
                 id ={id}
                 name={name}
                 description={description}
                 message={message}
                 photoUrl={photoUrl}
                 hour={hour}
                 minutes ={minutes}
                />
            ))}
           </FlipMove>

           
        
        </div>
    )
}

export default Feed
