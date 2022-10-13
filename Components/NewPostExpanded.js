import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const NewPostExpanded = ({setnewPostActive}) => {
  return (
    <div className='newPostExpandedContainer'>
        <div className="header_bar">
            <span className='headerTitle'>Create Post</span>
            <div onClick={() => setnewPostActive(false)} className="closeIcn">
                <FontAwesomeIcon icon={faTimes} />
            </div>
        </div>

        <div className="userProfileInfo">
            <div className="profile_pic"></div>
            <div className="profile_info"><span className="username">Levi Okoye</span> <br /> <span className="user_major">Information Technology</span></div>
        </div>

        <div className="post_entry">
            <textarea contentEditable={true} className='post_entry_field' placeholder="what's on your mind, User?"></textarea>
        </div>
    </div>
  )
}

export default NewPostExpanded