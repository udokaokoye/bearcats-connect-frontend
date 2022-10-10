import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'

const Post = () => {

  return (
    <div className='postContainer'>
        <div className="post_profile_img">
            <div className="img"></div>
        </div>
        <div className="post_info">
        <div className="usernameAndMoreInfo">
        <h4 className='username'>Users name @username</h4>
        <span>...</span>
        </div>
        <span className="post_time">12 hours ago</span>
        <p className="postCaption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi dolorum eveniet similique aut explicabo quibusdam sit corporis qui maxime.</p>

            <div className="post_action_btns">
                <button> <FontAwesomeIcon className='post_icns' icon={faHeart} /> Like</button>
                <button><FontAwesomeIcon className='post_icns' icon={faFacebookMessenger} /> 22 Comment</button>
                <button><FontAwesomeIcon className='post_icns' icon={faShare} /> Share</button>
            </div>
        </div>
    </div>
  )
}

export default Post