import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import PostMedia from './PostMedia'

const Post = ({post}) => {

  return (
    <div className='postContainer'>
        <div className="post_profile_img">
            <div style={{background: `url(${post.profilePic})`}} className="img"></div>
        </div>
        <div className="post_info">
        <div className="usernameAndMoreInfo">
        <h4 className='username'>{post.name} <span className='userhandle'>@{post.username}</span></h4>
        <span>...</span>
        </div>
        <span className="post_time">{post.postTime}</span>
        <p className="postCaption">{post.postCaption}</p>
        <br />
        {post.images.length !== 0 ? (<PostMedia fileType={"image"} files={post.images} orientation={post.orientation} />) : ""}
        <br />
        <br />

            <div className="post_action_btns">
                <button> <FontAwesomeIcon className='post_icns' icon={faHeart} /> Like</button>
                <button><FontAwesomeIcon className='post_icns' icon={faFacebookMessenger} /> {post.commentCount} Comment</button>
                <button><FontAwesomeIcon className='post_icns' icon={faShare} /> Share</button>
            </div>
        </div>
    </div>
  )
}

export default Post