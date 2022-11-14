import React from 'react'

const MiniProfileCard = ({name, major, imageUrl, username=false, showFollow=true, withUsername, useredirectLink, size}) => {
  return (
    <div style={{width: size == 'small' ? '90%' : '100%', height: size == 'small' ? 'auto' : 70}} className='mini_profile_container'>
        <div className="profile_img">
            <div style={{background: `url(${imageUrl})`, width: size == 'small' ? 30 : 60, height: size == 'small' ? 30 : 60}} className="img"></div>
        </div>

        <div className="profile_info">
          {/* ! Create a link on the name tag to go to ther profile using the username */}
            <h4 style={{fontSize: size == 'small' ? 13 : 15}}>{name}</h4>
            <span style={{fontSize: size == 'small' ? 10 : 12}}>{withUsername ? "@" + username : major}</span>
            <br />
            {showFollow ? (<button>+ Follow</button>) : ''}
        </div>
            </div>
  )
}

export default MiniProfileCard