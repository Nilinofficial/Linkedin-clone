
import "./Sidebar.css";
import {Avatar} from "@material-ui/core"
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function Sidebar() {

  const user = useSelector(selectUser);

const recentItem = (topic) => (
    <div className="sidebar__recentItem">
          <span className="sidebar__hash">#</span>
          <p>{topic}</p>
    </div>
)


  return <div className="sidebar">
             <div className="sidebar__top">
                 <img src="https://images.unsplash.com/photo-1632687218777-92fea96fb3aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
                 <Avatar className ="sidebar__avatar" > {user.email[0]}
                   </Avatar>
                 <h2>{user.displayName}</h2>
                 <h4>{user.email}</h4>
             </div>

             <div className="sidebar__stats">

                 <div className="sidebar__stat">
                   <p>Who viewed you</p>
                   <p className="sidebar__statNumber">2,456</p>
                 </div>

                 <div className="sidebar__stat">
                 <p>Who viewed you</p>
                   <p className="sidebar__statNumber">2,897</p>
                     </div>

             </div>
             <div className="sidebar__bottom">
                 <p>Recent</p>
                { recentItem("reactJs")}
                { recentItem("programming")}
                { recentItem("Software Engineering")}
                { recentItem("Web development")}
                { recentItem("Electrical and Electronics Engineering")}
             </div>


  </div>;
}

export default Sidebar;





