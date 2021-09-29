import "./Header.css";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HeaderOption from "./HeaderOption/HeaderOption";
import LogoutIcon from '@mui/icons-material/Logout';
import {auth} from "../../firebase/firebase"
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from "../../features/userSlice";
function Header() {

  const history = useHistory()
  const dispatch = useDispatch();

  const signout = () => {
    dispatch(logout())
    auth.signOut()
  }


  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__logo"
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="search" />
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption
          title="Me"
          avatar="https://nilinofficial.live/images/Nilindp.png"
        />
         

          <LogoutIcon onClick = {signout}/>

      </div>
    </div>
  );
}

export default Header;
