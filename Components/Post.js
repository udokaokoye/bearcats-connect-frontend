import { faHeart, faMapMarkedAlt, faMapMarker, faMapMarkerAlt, faMarker, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import React, {useState, useEffect} from 'react'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import PostMedia from './PostMedia'
import AddComment from './AddComment'
import Tooltip from './Tooltip'
import Link from 'next/link';
import Comment from './Comment'
import { locationList } from '../lib/swr-hooks'
const Post = ({post, comments, tags, align=true, width=70, user}) => {
  const [showToolTip, setshowToolTip] = useState(false)
  // const [caption, setcaption] = useState(post.caption)
  let caption = post.caption
  let postLocation = {
    name: post.location !== '' ? locationList.filter((e) => e.id == post.location)[0].name : '',
    campus: post.location !== '' ? locationList.filter((e) => e.id == post.location)[0].campus : ''
  };
  useEffect(() => {
    if (tags?.length > 0) {
      tags.forEach(tag => {
        caption = caption.replace(`@${tag.tagged_userid}`, `<a href='/profile/${tag.tagged_userid}'><span class='taggedUser'>${tag.firstName} ${tag.lastName}</span></a>`)
        //  setcaption(cp.replace(`@${tag.tagged_userid}`, `<b>${tag.firstName} ${tag.lastName}</b>`))
      });
    }
    document.getElementById(`postCaption_${post.id}`).innerHTML = caption
    // console.log(locationList.filter((e) => e.id == post.location)[0])
    // if (post.location !== '') {
    //   postLocation = {
    //     name: locationList.filter((e) => e.id == post.location)[0].name,
    //     campus: locationList.filter((e) => e.id == post.location)[0].campus
    //   }
    //   // console.log(postLocation)
    // }

  }, [])
  

  return (
    <div id={post.id} style={{margin: align ? "0 auto" : '', width: `${width}%`}} className='postContainer'>
        <div onClick={() => console.log(comments)} className="post_profile_img">
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
        {post.location !== '' ? (
          <span className='postLocation'><FontAwesomeIcon className='locationIcon' icon={faMapMarkerAlt} /> {postLocation.name}, {postLocation.campus}</span>
        ) : ''}
        <span className="post_time">{post.postTime}</span>
        
        
        {post.images.length > 0 ? (
          <>
          <Link href={`/photos/${post.id}`}>
          <p id={`postCaption_${post.id}`} className="postCaption"></p>
          </Link>
          <br />
          <Link href={`/photos/${post.id}`}>
          <PostMedia fileType={"image"} files={post.images} orientation={post.orientation} /> 
           </Link>
           </>
          ) : (
            
            <p id={`postCaption_${post.id}`} className="postCaption"></p>

          )}
        <br />

        <div className="post_action_btns">
                <button> <FontAwesomeIcon className='post_icns' icon={faHeart} /> Like</button>
                <button><FontAwesomeIcon className='post_icns' icon={faFacebookMessenger} /> {comments?.count} Comment</button>
                <button><FontAwesomeIcon className='post_icns' icon={faShare} /> Share</button>
            </div>
            <br />

            {comments?.count > 0 ? (
              <Comment 
              comment={comments.comments[0]} 
              user={user} postAuthorId={post.user_id}  
              reply={comments.comments.filter((e) => e.reply_id !== 'null' && e.reply_id == comments.comments[0].id)} 
              />
            ) : ""}

            <br />

        <AddComment user={user} pid={post.id} outline />


        </div>
    </div>
  )
}

export default Post