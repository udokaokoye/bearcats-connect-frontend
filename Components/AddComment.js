import React, {useState, useEffect} from 'react'

const AddComment = ({user, pid}) => {
    const [comment, setcomment] = useState('')

if (typeof window !== "undefined") {
    document.getElementById('commentInput')?.addEventListener("keydown", (e) => {
        if (e.code === 13) {
            handleSubmmitComment()
        }
    })
    // document.getElementById('commentInput')?.addEventListener("keydown", () => console.log('removed'))
}



   const handleSubmmitComment = (e) => {

    if (e.key === 'Enter') {

        const formData = new FormData();
        formData.append('comment', comment)
        formData.append('user_id', user.userId)
        formData.append("post_id", pid)
        formData.append('reply_id', null)

        if (comment !== '' || comment !== null || comment !== ' ') {
            fetch('http://192.168.1.51/bearcats_connect/comment.php', {
                method: "POST",
                body: formData
            }).then((res) => res.json()).then((data) => {
                console.log(data)
                setcomment('')
            })
        } else {
            console.log("NO COMMENT")
        }
    }
    }

  return (
    <div className='addCommentContainer'>
        <div style={{background: `url(${user.img})`}} className="userProfilePic"></div>
        <div className="commentInput">
            <input  id='commentInput' onKeyDown={(e) => handleSubmmitComment(e)} onChange={(e) => setcomment(e.target.value)} value={comment} type="text" placeholder='Write a comment...' />
        </div>
    </div>
  )
}

export default AddComment