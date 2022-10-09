import React from 'react'

const NewPost = () => {
  return (
    <div className='newPost_container'>
        <div className="user_image">
            <div className="img"></div>
        </div>
        <div className="postEntry">
            <input type="text" placeholder="What's Pawing?" />

            <div className="post_action_buttons">
                <button>Photo</button>
                <button>Video</button>
                <button>Thread</button>
                <button>Schedule</button>
            </div>
        </div>
    </div>
  )
}

export default NewPost