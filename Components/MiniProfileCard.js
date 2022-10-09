import React from 'react'

const MiniProfileCard = ({name, major, imageUrl, username}) => {
  return (
    <div className='mini_profile_container'>
        <div className="profile_img">
            <div style={{background: `url(${imageUrl})`}} className="img"></div>
        </div>

        <div className="profile_info">
          {/* ! Create a link on the name tag to go to ther profile using the username */}
            <h4>{name}</h4>
            <span>{major}</span>
            <br />
            <button>+ Follow</button>
        </div>
            </div>
  )
}

export default MiniProfileCard