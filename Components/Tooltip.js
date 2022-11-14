import React from 'react'
import { mutate } from 'swr';
import Cookies from 'js-cookie';
const Tooltip = ({contentType, content, owner }) => {

    const deleteHandler = () => {
        // console.log(Cookies.get('user-token'))
        // return;
        switch (contentType) {
            case 'comment':
                fetch(`http://localhost/bearcats_connect/deleteComment.php?id=${content[0]}`)
                mutate(`http://192.168.1.51/bearcats_connect/getPost.php?postId=${content[1]}`)
                break;
            case 'post':
                fetch(`http://localhost/bearcats_connect/deletePost.php?pid=${content[0]}`, {headers: {'Authorization': `Bearer ${Cookies.get('user-token')}`}})
                mutate('http://192.168.1.51/bearcats_connect/getFeed.php?portion=all')
            // default:
            //     break;
        }


    }
  return (
    <div className='tooltip'>
        <div className="tooltipContent">
            {contentType == 'post' ? (<span className='tooltipItem'>Save Post</span>) : ''}
            {contentType == 'post' ? (<span className='tooltipItem'>Copy link</span>) : ''}
            {contentType == 'post' ? (<span className='tooltipItem'>Share Post</span>) : ''}
            <span className='tooltipItem'>Report {contentType}</span>
            {owner ? (<span className='tooltipItem' onClick={() => deleteHandler()}>Delete {contentType}</span>) : ''}
            
        </div>
    </div>
  )
}

export default Tooltip