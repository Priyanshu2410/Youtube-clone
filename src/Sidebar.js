import React from 'react'
import './Sidebar.css'
import SidebarRow from "./SidebarRow";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import WatchLaterSharpIcon from '@mui/icons-material/WatchLaterSharp';
import ThumbUpSharpIcon from '@mui/icons-material/ThumbUpSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';

function Sidebar() {
  return (
    <div className='sidebar'>
        <h1>i am sidebar</h1>
        <SidebarRow  selected Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={WhatshotSharpIcon} title="Treading" />
        <SidebarRow Icon={SubscriptionsSharpIcon} title="Subscription" />
        <hr/>
        <SidebarRow Icon={VideoLibrarySharpIcon} title="VideoLibrarySharpIcon" />
        <SidebarRow Icon={HistorySharpIcon} title="HistorySharpIcon" />
        <SidebarRow Icon={OndemandVideoSharpIcon} title="Your videos" />
        <SidebarRow Icon={WatchLaterSharpIcon} title="WatchLater" />
        <SidebarRow Icon={ThumbUpSharpIcon} title="Liked Videos" />
        <SidebarRow Icon={ExpandMoreSharpIcon} title="More" />
    </div>
  )
}

export default Sidebar