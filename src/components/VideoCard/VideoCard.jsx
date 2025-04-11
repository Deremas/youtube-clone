import React from "react";
import videoStyles from "./VideoCard.module.css";
import { Avatar } from "@mui/material";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <>
      <div className={videoStyles.videoCard}>
        <img className={videoStyles.videoCard__thumbnail} src={image} alt="" />
        <div className={videoStyles.videoCard__info}>
          <Avatar
            className={videoStyles.videoCard__avatar}
            alt={channel}
            src={channelImage}
          />
          <div className={videoStyles.videoCard__text}>
            <h4>{title} </h4>
            <p>{channel}</p>
            <p>
              {views} • {timestamp}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
