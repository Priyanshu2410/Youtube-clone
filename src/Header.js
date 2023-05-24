import React, { useState } from "react";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header-left">
        <MenuSharpIcon />
        <Link to="/">
          <img
            className="header-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          />
        </Link>
      </div>
      <div className="header-input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header-search" />
        </Link>
      </div>
      <div className="header-icon">
        <VideoCallSharpIcon className="header-icons" />
        <AppsSharpIcon className="header-icons" />
        <NotificationsSharpIcon className="header-icons" />
        <Avatar
          className="header-icons"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKtCUqXFJubZN9voIRzh9fw11zI0zU-SxXiJsMxSJy&s"
        />
      </div>
    </div>
  );
}

export default Header;
