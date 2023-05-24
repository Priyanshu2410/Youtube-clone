import React from 'react'
import "./sidebarrow.css"


function SidebarRow({selected,Icon,title}) {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
        <Icon className="sidebarrow-icon" />
        <h2 className='sidebarrow-title'>{title}</h2>
    </div>
  )
}

export default SidebarRow