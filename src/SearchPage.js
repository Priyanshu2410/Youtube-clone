import React from 'react'
import './SearchPage.css'
import ChnnelRow from './ChnnelRow'
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function SearchPage() {
  return (
    <div className='searchpage'>
        <div className='searchpage-filter'>
            <FilterAltIcon/>
            <h2>FILTER</h2>
        </div>
        <hr/>

        <ChnnelRow
        image=""
        channel="jscnj"
        verified
        subs="1M"
        noOfVideos={382}
        decrption="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
        />
        <hr/>
    </div>
  )
}

export default SearchPage