import React from 'react'
import MiniProfileCard from './MiniProfileCard'

const SuggestedFriends = () => {
    const demoArray = [
        {
            name: "James Charlie",
            major: "Information Technology",
            username: "dummy",
            imageUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
            name: "Sanders Fox",
            major: "Pre-Bussiness",
            username: "dummy",
            imageUrl: "https://media.istockphoto.com/photos/smiling-young-woman-blogger-sit-on-sofa-looking-at-camera-picture-id1213557434?b=1&k=20&m=1213557434&s=170667a&w=0&h=aLaNN7mHtTYdEgSubEupIc57mIJlI9mTdEqwNIBu6jA="
        },
        {
            name: "De-Andreaz Sanxhez",
            major: "Cyber-Security",
            username: "dummy",
            imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80"
        },
        {
            name: "Tunji Olamide",
            major: "Vetinary Technology",
            username: "dummy",
            imageUrl: "https://images.unsplash.com/photo-1512372923090-7b14fb496d44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        },
        {
            name: "Rachel Smith",
            major: "Pre-Engineering",
            username: "dummy",
            imageUrl: "https://images.unsplash.com/photo-1464962634408-5970d4f0614d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }
    ]
  return (
    <div className='suggestedFriends'>
        <h3>Suggested</h3>
        <hr />
        {demoArray.slice(0, 4).map((user, index) => (
            <React.Fragment key={index}>
                <MiniProfileCard name={user.name} major={user.major} imageUrl={user.imageUrl} username={user.username} />
                <hr />
            </React.Fragment>
            
            
        ))}
    </div>
  )
}

export default SuggestedFriends