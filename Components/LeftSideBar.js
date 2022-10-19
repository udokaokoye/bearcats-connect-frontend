import React, {useEffect, useState} from 'react'
import SuggestedFriends from './SuggestedFriends'
import Trending from './Trending'

const LeftSideBar = ({user}) => {


  
  return (
    <div className='left_sections'>
      <div className="left_section_1">
        <div className="profile_img">
          <div style={{background: `url(${user?.img})`}} className="img"></div>
        </div>
        <span>{user?.fName + " " + user?.lName}</span>
      </div>

      <div className="left_section_2">
        <Trending />
      </div>

      <div className="left_section_3">
        <SuggestedFriends />
      </div>
    </div>
  )
}

export default LeftSideBar