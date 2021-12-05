//Creates Topbar component of the Feed page with Logo
import "./Topbar.css";
import React from "react";
import searchImg from "../resources/search.png";
import profileImg from "../resources/profile.png";
import chatImg from "../resources/chat.png";
import notifImg from "../resources/bell.png";
import avatarImg from "../resources/avar1.jpg";

export default function Topbar() {
  return (
    <div>
      {/* Title Name */}
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">MyLife</span>
        </div>
        {/* Search bar */}
        <div className="topbarCenter">
          <div className="searchbar">
            <img className="searchIcon" src={searchImg} />
            <input placeholder=" Search " className="searchInput" />
          </div>
        </div>
        {/* Links */}
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Explore</span>
            <span className="topbarLink">Friends</span>
          </div>
          {/* Notifications */}
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <img className="icon" src={profileImg} />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <img className="icon" src={chatImg} />
              <span className="topbarIconBadge">5</span>
            </div>
            <div className="topbarIconItem">
              <img className="icon" src={notifImg} />
              <span className="topbarIconBadge">3</span>
            </div>
          </div>
          {/* Profile Pic */}
          <img src={avatarImg} className="topbarImg" />
        </div>
      </div>
      <h1 class="title">Home</h1>
    </div>
  );
}
