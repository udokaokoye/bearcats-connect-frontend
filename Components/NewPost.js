import React from 'react'

const NewPost = ({setnewPostActive, setaddPostActive}) => {
  return (
    <div className='newPost_container'>
        <div className="user_image">
            <div className="img"></div>
        </div>
        <div className="postEntry">
            <input onFocus={() => setnewPostActive(true)} type="text" placeholder="What's Pawing?" />

            <div className="post_action_buttons">
                <button onClick={() => {
                    setnewPostActive(true)
                    setaddPostActive(true)
                }}>Photo</button>
                <button>Video</button>
                <button>Thread</button>
                <button>Schedule</button>
            </div>
        </div>
    </div>
  )
}

export default NewPost