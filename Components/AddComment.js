import React, {useState, useEffect} from 'react'

const AddComment = ({user, pid, setcommentAdded, size=40, inputHeight=90, outline=false, replyId=null}) => {
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
        formData.append('reply_id', replyId)

        if (comment !== '' || comment !== null || comment !== ' ') {
            fetch('http://192.168.1.51/bearcats_connect/comment.php', {
                method: "POST",
                body: formData
            }).then((res) => res.json()).then((data) => {
                console.log(data)
                setcomment('')
                if (setcommentAdded) {
                    setcommentAdded(Math.random())
                }

            })
        } else {
            console.log("NO COMMENT")
        }
    }
    }

  return (
    <div className='addCommentContainer'>
        <div style={{background: `url(${user?.img})`, width: `${size}px`, height: `${size}px`}} className="userProfilePic"></div>
        <div className="commentInput" style={{height: inputHeight + '%'}}>
            <input autoComplete='off' style={{outlineWidth: outline ? 1: 0}} id='commentInput' onKeyDown={(e) => handleSubmmitComment(e)} onChange={(e) => setcomment(e.target.value)} value={comment} type="text" placeholder='Write a comment...' />
        </div>
    </div>
  )
}

export default AddComment