import React from 'react'
import channelRowStyle from "./ChannelRow.module.css";
import { Avatar } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

function ChannelRow({image, channel, verified, subs, noOfVideos, description}) {
  return (
    <div className={channelRowStyle.channelRow}>
      <Avatar
        className={channelRowStyle.channelRow__logo}
        src={image}
        alt={channel}
      />

      {/* <img src={image} alt="" /> */}
      <div className={channelRowStyle.channelRow__text}>
        <h4>
          {channel} {verified && <CheckCircleOutlineOutlinedIcon />}
        </h4>

        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ChannelRow