import React from "react";
import recommStyle from "./RecommendedVideos.module.css";
import VideoCard from "../VideoCard/VideoCard";

function RecommendedVideos() {
  return (
    <>
      <div className={recommStyle.recommededVideos}>
        <h2>Recommended Videos</h2>
        <div className={recommStyle.recommededVideos__videos}>
          <VideoCard
            title="Become a Wed Developer in 10 minutes | 2019/2020"
            views="2.3M views"
            timestamp="3 days ago"
            channelImage="https://yt3.googleusercontent.com/ytc/AIf8zZSmxXqkR2UxxBlIepmQlMwMaTxDrnYeqNRtF0pW=s176-c-k-c0x00ffffff-no-rj"
            channel="Sonny Sangha"
            image="https://i.ytimg.com/vi/UaB_FtsdlYk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAKaocoswLDsrid7G-NqNBc9DPtcw"
          />
          <VideoCard
            title="Mastering JavaScript: A Complete Guide (2024)"
            views="1.8M views"
            timestamp="1 week ago"
            channelImage="https://yt3.googleusercontent.com/ytc/AIf8zZTvgMtRsRE5FzX-7G0B2uG8W3RJ3tT_sP4I2Fo=s176-c-k-c0x00ffffff-no-rj"
            channel="Tech Guru"
            image="https://i.ytimg.com/vi/7B8WhH56EOE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAI5U8dYXgUgN33O6ZULZk1YPB4MA"
          />
          <VideoCard
            title="React.js Tutorial for Beginners | Learn React in 2024"
            views="3.1M views"
            timestamp="5 days ago"
            channelImage="https://yt3.googleusercontent.com/ytc/AIf8zZSLWiBpRxUStf25H6LfhBX-FHJPeFk2dN6hKDZQ=s176-c-k-c0x00ffffff-no-rj"
            channel="CodeWithHarry"
            image="https://i.ytimg.com/vi/Dorf8i6lCuk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBYLCnWMTDV_T8dE75WlT6Z_oAtmw"
          />
          <VideoCard
            title="How to Make Money with Coding in 2024"
            views="980K views"
            timestamp="2 weeks ago"
            channelImage="https://yt3.googleusercontent.com/ytc/AIf8zZSRpjVPw3RMWzF2kjLs7nUwOx6FKakmC6UQkzM=s176-c-k-c0x00ffffff-no-rj"
            channel="Money Coder"
            image="https://i.ytimg.com/vi/PLMhEsJjBrc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBhwncfC6JzZFPiEdl-MWfZLUwUFA"
          />

          <VideoCard
            title="Learn Node.js in 60 Minutes | Full Course"
            views="2.5M views"
            timestamp="3 days ago"
            channelImage="https://yt3.googleusercontent.com/ytc/AIf8zZQQs3xu3b3URz4ySJDdM_w62YvUOJ3E_9NWT1Xs=s176-c-k-c0x00ffffff-no-rj"
            channel="Traversy Media"
            image="https://i.ytimg.com/vi/zb3Qk8SG5Ms/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCOdpjD2hZ3G7EajEYEvztZa6Jl6Q"
          />

          <VideoCard
            title="CSS Grid vs Flexbox: When to Use Which?"
            views="1.1M views"
            timestamp="4 days ago"
            channelImage="https://yt3.googleusercontent.com/ytc/AIf8zZTeXTjXMr8F_RpbMv4Sjo8Kae2tpxLBtjRu2nUE=s176-c-k-c0x00ffffff-no-rj"
            channel="CSS Mastery"
            image="https://i.ytimg.com/vi/1PnVor36_40/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCxOljzk1RCW_ZBzP7uXytlY_PG6w"
          />

          <VideoCard
            title="The Future of AI: 2024 Predictions"
            views="5.6M views"
            timestamp="1 month ago"
            channelImage="https://yt3.googleusercontent.com/ytc/AIf8zZSDfG4FzT77WZQ7q7N9XHY98RfXb6pNwLZQZ10=s176-c-k-c0x00ffffff-no-rj"
            channel="Tech Insider"
            image="https://i.ytimg.com/vi/3nYLTiY5S9U/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAtsZQy8pLhyj4mhcJTTZmRSt5F8w"
          />
          <VideoCard
            title="Python for Beginners - Learn Python in 1 Hour"
            views="3.8M views"
            timestamp="2 weeks ago"
            channelImage="https://yt3.googleusercontent.com/ytc/AIf8zZSRpjVPw3RMWzF2kjLs7nUwOx6FKakmC6UQkzM=s176-c-k-c0x00ffffff-no-rj"
            channel="Programming with Mosh"
            image="https://i.ytimg.com/vi/rfscVS0vtbw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDnWIXv0dKQsBz3k3m1PyluLfFCfg"
          />

          <VideoCard
            title="How to Build a Full-Stack App with React and Firebase"
            views="890K views"
            timestamp="1 week ago"
            channelImage="https://yt3.googleusercontent.com/ytc/AIf8zZSTJlbQ3KfC5A4xnp3vJXtP-6YwFjFt7T0hS4Q=s176-c-k-c0x00ffffff-no-rj"
            channel="Fireship"
            image="https://i.ytimg.com/vi/mrHNSanmqQ4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAvkRrFGT5MK7ZgrcpBfDh1F7uCSQ"
          />

          <VideoCard
            title="How AI is Changing the World in 2024"
            views="4.5M views"
            timestamp="3 weeks ago"
            channelImage="https://yt3.googleusercontent.com/ytc/AIf8zZQo2tPbz9O5X7T_eLpx5ICzVsVfqAl4tTTDhjs=s176-c-k-c0x00ffffff-no-rj"
            channel="Veritasium"
            image="https://i.ytimg.com/vi/2hY9O4uF4gY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDjUQwHZR4vI2HfU9zqJDf2kPZ2tQ"
          />

          <VideoCard
            title="Best VS Code Extensions for Developers in 2024"
            views="2.1M views"
            timestamp="5 days ago"
            channelImage="https://yt3.googleusercontent.com/ytc/AIf8zZQQs3xu3b3URz4ySJDdM_w62YvUOJ3E_9NWT1Xs=s176-c-k-c0x00ffffff-no-rj"
            channel="The Net Ninja"
            image="https://i.ytimg.com/vi/wREe1_iV7Ag/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCQCUK4xak2yfMBknJp05AspeIX9g"
          />

          <VideoCard
            title="Docker for Beginners - Full Course"
            views="1.3M views"
            timestamp="2 months ago"
            channelImage="https://yt3.googleusercontent.com/ytc/AIf8zZRR4AqT8xGfbNL7XclJo7I1g8WtPAAKg3Wn6IM=s176-c-k-c0x00ffffff-no-rj"
            channel="freeCodeCamp.org"
            image="https://i.ytimg.com/vi/3c-iBn73dDE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLASoZyygjpWl0P-IE2bCZnV1-U-Mg"
          />
        </div>
      </div>
    </>
  );
}

export default RecommendedVideos;
