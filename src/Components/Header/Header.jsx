import React from "react";
import "./Header.css";
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import ChatBubbleOutlineTwoToneIcon from '@mui/icons-material/ChatBubbleOutlineTwoTone';
import ExploreTwoToneIcon from '@mui/icons-material/ExploreTwoTone';
export default function Header() {
  return (
    <div className="Header">
      <div className="Header__logo">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="insta_logo" aria-hidden />
      </div>
      <div className="Header__Input">
        <input type="search" name="Search" placeholder="Search" id="" />
      </div>
      <div className="Header__Icon">
        <HomeIcon sx={{ fontSize: 40 }} />
        <ChatBubbleOutlineTwoToneIcon sx={{ fontSize: 40 }} />
        <ExploreTwoToneIcon sx={{ fontSize: 40 }} />
        <FavoriteBorderTwoToneIcon sx={{ fontSize: 40 }} />

      </div>
    </div>

  );
}
