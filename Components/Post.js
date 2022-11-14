import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import React, {useState} from 'react'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import PostMedia from './PostMedia'
import AddComment from './AddComment'
import Tooltip from './Tooltip'

const Post = ({post, comment, align=true, width=70, user}) => {
  const [showToolTip, setshowToolTip] = useState(false)
  // console.log(post.images)

  return (
    <div style={{margin: align ? "0 auto" : '', width: `${width}%`}} className='postContainer'>
        <div className="post_profile_img">
            <div style={{background: `url(${post.profile_picture})`}} className="img"></div>
        </div>
        <div className="post_info">
        <div className="usernameAndMoreInfo">
        <a href={`/profile/${post.user_id}`}><h4 className='username'>{post.fName + " " + post.lName} <span className='userhandle'>@{post.username}</span></h4></a>
        <span onClick={() => setshowToolTip(!showToolTip)} style={{ position: "relative" }}>
              <span className="tooltipdots">...</span>
              <div style={{display: showToolTip ? 'block' : 'none'}} className="toolTipCont">
                <Tooltip contentType={'post'} content={[post.id]} owner={user?.userId == post.user_id} />
              </div>
            </span>
        </div>
        <span className="post_time">{post.postTime}</span>
        <a href={`/photos/${post.id}`}><p className="postCaption">{post.caption}</p></a>
        <br />
        {post.images.length !== 0 ? (<a href={`/photos/${post.id}`}><PostMedia fileType={"image"} files={post.images} orientation={post.orientation} /> </a>) : ""}
        <br />

        <div className="post_action_btns">
                <button> <FontAwesomeIcon className='post_icns' icon={faHeart} /> Like</button>
                <button><FontAwesomeIcon className='post_icns' icon={faFacebookMessenger} /> {comment?.count} Comment</button>
                <button><FontAwesomeIcon className='post_icns' icon={faShare} /> Share</button>
            </div>
            <br />

        <AddComment user={user} pid={post.id} outline />



        </div>
    </div>
  )
}

export default Post