import React from "react";
import CSSStyle from "./SearchPage.module.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "../ChannelRow/ChannelRow";
import VideoRow from "../VideoRow/VideoRow";

function SearchPage() {
  return (
    <>
      <div className={CSSStyle.searchPage}>
        <div className={CSSStyle.searchPage__filter}>
          <TuneOutlinedIcon className="searchPage__filterIcon" />
          <h2>FILTER</h2>
        </div>
        <hr />
        <ChannelRow
          image="https://yt3.googleusercontent.com/ytc/AOPolaR2C0rXyY5jzK6z2m1n0Wf8xJ3g4w4vV7a1sQ=s176-c-k-c0x00ffffff-no-rj"
          channel="Clever Programmer"
          verified
          subs="660k"
          noOfVideos={382}
          description="Sharing tech tips, startup lessons, and motivation to help you grow. New videos every week!"
        />
        <hr />
        <VideoRow
          views="2.3M views"
          subs="150K"
          description="Learn how to become a web developer quickly! This video will guide you through the basics."
          timestamp="3 days ago"
          channel="Sonny Sangha"
          title="Become a Web Developer in 10 minutes | 2019/2020"
          image="https://i.ytimg.com/vi/UaB_FtsdlYk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAKaocoswLDsrid7G-NqNBc9DPtcw"
        />
        <VideoRow
          views="1.5M"
          subs="1.2M"
          description="The best React tutorial for beginners."
          timestamp="2 weeks ago"
          channel="Academind"
          title="React JS Crash Course"
          image="https://i.ytimg.com/vi/UaB_FtsdlYk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAKaocoswLDsrid7G-NqNBc9DPtcw"
        />
        <VideoRow
          views="1.5M"
          subs="1.2M"
          description="Master React JS with this crash course. Perfect for beginners and those looking to level up their skills."
          timestamp="2 weeks ago"
          channel="Clever Programmer"
          title="React JS Crash Course"
          image="https://i.ytimg.com/vi/Uo9kIZd0F9Y/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA0INlOXq0KH_gg2QDoMOyzCdtU7w"
        />

        <VideoRow
          views="3.1M views"
          subs="350K"
          description="Learn React.js in 2024 with this beginner's tutorial. Master React fundamentals and start building."
          timestamp="5 days ago"
          channel="CodeWithHarry"
          title="React.js Tutorial for Beginners | Learn React in 2024"
          image="https://i.ytimg.com/vi/Dorf8i6lCuk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBYLCnWMTDV_T8dE75WlT6Z_oAtmw"
        />

        <VideoRow
          views="980K views"
          subs="100K"
          description="Make money with coding in 2024 by learning practical skills that pay well. This guide is for you."
          timestamp="2 weeks ago"
          channel="Money Coder"
          title="How to Make Money with Coding in 2024"
          image="https://i.ytimg.com/vi/PLMhEsJjBrc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBhwncfC6JzZFPiEdl-MWfZLUwUFA"
        />

        <VideoRow
          views="2.5M views"
          subs="400K"
          description="Complete Node.js tutorial for beginners. Learn to build full applications with Node.js in just 60 minutes."
          timestamp="3 days ago"
          channel="Traversy Media"
          title="Learn Node.js in 60 Minutes | Full Course"
          image="https://i.ytimg.com/vi/zb3Qk8SG5Ms/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCOdpjD2hZ3G7EajEYEvztZa6Jl6Q"
        />

        <VideoRow
          views="1.1M views"
          subs="120K"
          description="CSS Grid vs Flexbox – learn when to use which layout system for your projects."
          timestamp="4 days ago"
          channel="CSS Mastery"
          title="CSS Grid vs Flexbox: When to Use Which?"
          image="https://i.ytimg.com/vi/1PnVor36_40/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCxOljzk1RCW_ZBzP7uXytlY_PG6w"
        />
      </div>
    </>
  );
}
<></>;

export default SearchPage;
