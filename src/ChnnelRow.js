import React from 'react'
import "./channelRow.css"
import { Avatar } from '@mui/material'
import VerifiedSharpIcon from '@mui/icons-material/VerifiedSharp';

function ChnnelRow({image,channel,verified,subs,noOfVideos,decrption}) {
  return (
    <div className='channelRow'>
        <Avatar className='channel-logo' alt={channel} src={image} />
        <div className='channel-text'>
            <h4>{channel} {verified && <VerifiedSharpIcon/>  }</h4>
            <p>{subs}subscribers : {noOfVideos}videos</p>
            <p>{decrption}</p>
        </div>
    </div>
  )
}

export default ChnnelRow