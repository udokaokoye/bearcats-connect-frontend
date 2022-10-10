import React from 'react'
import SuggestedFriends from './SuggestedFriends'
import Trending from './Trending'

const LeftSideBar = () => {
  return (
    <div className='left_sections'>
      <div className="left_section_1">
        <div className="profile_img">
          <div className="img"></div>
        </div>
        <span>Levi Okoye</span>
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