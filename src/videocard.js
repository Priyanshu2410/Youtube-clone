import { Avatar } from '@mui/material'
import "./videocard.css"
import React from 'react'

function videocard({image,title,channel,views,timestamp,channelimg}) {
  return (
    <div className='videocard'>
        <img className='videocard-img' src={image} alt=""/>
        <div className='video-info'>
            <Avatar className='videocard-avatar' alt={channel} src={channelimg} />
        </div>
        <div className='video-text'>
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
                {views}.{timestamp}
            </p>
        </div>
    </div>
  )
}

export default videocard