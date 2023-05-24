import React from 'react'
import Videocard from './videocard'
import './video.css'

function Videos() {
  return (
    <div className='rec-video'>
     <h2> Recommended</h2>
     <div className='main-video'>
      <Videocard
        title="priyanshu Patel"
        views="2.3M Views"
        timestamp="3 days ago"
        channelimg=""
        channel="priyanshu"
        image=""
      />
     </div>
      </div>
  )
}

export default Videos