import React,{forwardRef,useEffect,useState} from 'react'
import "./Post.css"
import {Avatar} from "@material-ui/core";
import FeedInputOptions from '../FeedInputOptions/FeedInputOptions';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { db } from '../../../firebase/firebase';
import { selectUser } from '../../../features/userSlice';
import {  useSelector } from 'react-redux';



const  Post = forwardRef(({name,description,message,id,hour,minutes},ref)  => {




     const user = useSelector(selectUser)
     const [ampm,setAmPm] = useState(" am")
     const[likes,setLikes] = useState(true)
     const [likeValue,setLikeValue] = useState(0)
     const[likeColor,setLikeColor] = useState(false)

     const like = () => {
     
        setLikes(!likes)

        if(likes === true) {
            setLikeValue(prevlike => prevlike+1)
            setLikeColor(!likeColor)
        }

        if (likes === false) {
            setLikeValue(prevlike => prevlike-1)
            setLikeColor(!likeColor)
        }

     }

     useEffect(() => {
        if (hour < 12){
            setAmPm("am")
        }
   
     },[description])

    return (
        <div ref= {ref} className="post" >
            <div className="post__header">
                <Avatar/>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <div className="post__time">
                        <p>Posted at : </p>
                        
                    <p> {hour}: </p> 
                    <p>{minutes}</p>
                    <p>{ampm}</p>

                    



                    </div>
                  
                    

                </div>
                <DeleteOutlineIcon className="post__delete" onClick={(event) => { db.collection('posts').doc(id).delete()}}/>

            </div>
            <div className="post__body">
                <p>{message} </p>
                
            </div>

            <div className="post__buttons">
                <button onClick= {like}>< ThumbUpOffAltIcon    style={{ color: likeColor ? 'blue' : 'black' }}  /> </button>
                <FeedInputOptions  Icon = {ChatBubbleOutlineIcon} title="Comment" color ="gray"/>
                <FeedInputOptions Icon = {ShareIcon} title="Share" color ="gray"/>
                <FeedInputOptions Icon = {SendIcon} title="Send" color ="gray"/>
            </div>
            <p>{likeValue} likes</p>
        </div>
    )
}
)
export default Post