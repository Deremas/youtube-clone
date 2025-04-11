import React, { useState } from "react";
import headerSyyles from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <>
      <div className={headerSyyles.header}>
        <div className={headerSyyles.header__left}>
          <MenuIcon />
          <Link to='/'>
            <img
              className={headerSyyles.header__logo}
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
              alt="youtube logo"
            />
          </Link>
        </div>
        <div className={headerSyyles.header__input}>
          <input onChange={(e)=>setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
          <Link to={`/search/${inputSearch}`}>
            <SearchIcon className={headerSyyles.header__inputButton} />
          </Link>
        </div>
        <div className={headerSyyles.header__icons}>
          <VideoCallIcon className={headerSyyles.header__icon} />
          <AppsIcon className={headerSyyles.header__icon} />
          <NotificationsIcon className={headerSyyles.header__icon} />
          <Avatar alt="Dereje" src="../../assets/Dere.jpg" />
        </div>
      </div>
    </>
  );
}

export default Header;
