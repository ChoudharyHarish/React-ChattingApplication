import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge,Avatar } from "@mui/material";
import img from "../profile.webp";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-20 navbar-main">
      <div className="brandName">
        <h1 className="text-[22px] text-white" >Chats</h1>
      </div>
      <div className="flex gap-24">
      <div
        className="flex flex-row items-center justify-center mr-8"
        style={{ border: "1px solid #728095", borderRadius:'10px' }}
      >
        <SearchIcon style = {{color:"#728095", marginLeft:'0.8rem'}}/>
        <input
          className="p-2 rounded-lg outline-none"
          type="search"
          name="search"
          id=""
          placeholder="Search"
          style={{backgroundColor:'#2D2E35',color:'#728095'}}
          
        />
      </div>
      <div className="flex items-center gap-8">
        <Badge badgeContent={1} color="secondary">
          <NotificationsIcon style={{color:'white'}} />
        </Badge>
        <Avatar alt="Profile-Picture" src={img} />
      </div>
    </div>
    </div>
  );
};

export default Navbar;
