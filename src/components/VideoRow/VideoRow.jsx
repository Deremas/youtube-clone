import React from 'react'
import videoRowStyle from "./VideoRow.module.css";

function VideoRow({views, subs, description, timestamp, channel, title, image}) {
  return (
    <>
      <div className={videoRowStyle.videoRow}>
        <img src={image} alt="" />
        <div className={videoRowStyle.videoRow__text}>
          <h3>{title}</h3>
          <p className={videoRowStyle.videoRow__headline}>
            {channel} •{" "}
            <span className={videoRowStyle.videoRow__subs}>
              <span className={videoRowStyle.videoRow__subsNumber}>{subs}</span>{" "}
              subscribers
            </span>{" "}
            • {views} views • {timestamp}
          </p>
          <p className={videoRowStyle.videoRow__description}>{description}</p>
          <p className={videoRowStyle.videoRow__description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
            eveniet.
          </p>
        </div>
      </div>
    </>
  );
}

export default VideoRow