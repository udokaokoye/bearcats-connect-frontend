import React from 'react'

const NewPost = ({setnewPostActive, setaddPhotoActive, user}) => {
  return (
    <div className='newPost_container'>
        <div className="user_image">
            <div style={{background: `url(${user.img})`}} className="img"></div>
        </div>
        <div className="postEntry">
            <input onFocus={() => setnewPostActive(true)} type="text" placeholder={`What's Pawing ${user?.fName}?`} />

            <div className="post_action_buttons">
                <button onClick={() => {
                    setnewPostActive(true)
                    setaddPhotoActive(true)
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