import React from 'react'

const Comment = () => {
  return (
    <div className='comment-container'>
        <div className="userProfile"></div>
        <div className="commentDetails">
            <div className='radius_div'>
            <span className='comment_user_name'>Users name</span>
            <p className='user_comment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, inventore accusantium voluptatum, debitis, mollitia assumenda velit quo perspiciatis aut laudantium quam tempore suscipit nesciunt rem! Facilis modi quam sunt voluptatibus?</p>
            </div>
            <div className='raction_cont'><span>Like</span> <span>Reply</span> <span>3h ago</span></div>
            <span className='view_reply'>view reply</span>
        </div>
    </div>
  )
}

export default Comment