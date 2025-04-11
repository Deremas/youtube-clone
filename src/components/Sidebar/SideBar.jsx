import React from "react";
import sideBarStyle from "./Sidebar.module.css";
import SideBarRow from "../SideBarRow/SideBarRow";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

function SideBar() {
  return (
    <>
      <div className={sideBarStyle.sideBar}>
        <SideBarRow selected={true} icon={HomeIcon} title="Home" />
        <SideBarRow icon={WhatshotIcon} title="Trending" />
        <SideBarRow icon={SubscriptionsIcon} title="Subscription" />
        <hr />
        <SideBarRow icon={VideoLibraryIcon} title="Library" />
        <SideBarRow icon={HistoryIcon} title="History" />
        <SideBarRow icon={OndemandVideoIcon} title="Your Videos" />
        <SideBarRow icon={WatchLaterIcon} title="Watch Later" />
        <SideBarRow icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
        <SideBarRow icon={ExpandMoreOutlinedIcon} title="Show More" />
        <hr />
      </div>
    </>
  );
}

export default SideBar;
