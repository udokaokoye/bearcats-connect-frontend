import React from 'react'
import LeftSideBar from '../Components/LeftSideBar'
import Navigation from '../Components/Navigation'
import NewPost from '../Components/NewPost'
import Post from '../Components/Post'
import styles from '../styles/Home.module.css'

export default function Home() {
  const demoPosts = [
    {
        name: "Jamie Charlie",
        username: "theonlyjamie06",
        profilePic: "https://media.istockphoto.com/photos/headshot-portrait-of-happy-mixed-race-african-girl-wearing-glasses-picture-id1144287292?b=1&k=20&m=1144287292&s=170667a&w=0&h=fvNKa6QuUa--cNv-oUXaHUBx8deD9iWgegvn76CtG_M=",
        postTime: "3 hours ago",
        postCaption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi dolorum eveniet similique aut explicabo quibusdam sit corporis qui maxime.",
        images: [],
        commentCount: 20,
    },
    {
        name: "De-Andreaz Sanchez",
        username: "sanchezdeandreas",
        profilePic: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80",
        postTime: "9 hours ago",
        postCaption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi dolorum eveniet similique aut explicabo quibusdam sit corporis qui maxime.",
        images: ["https://images.unsplash.com/photo-1566955300914-cc34dc6cbc04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJjaGV0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1554919700-69c4bb11dde5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1505&q=80", "https://images.unsplash.com/photo-1618181622572-0cb15620aae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"],
        commentCount: 33,
    },
    {
        name: "Sandra Fox",
        username: "thesandrafoxsmith1",
        profilePic: "https://media.istockphoto.com/photos/smiling-young-woman-blogger-sit-on-sofa-looking-at-camera-picture-id1213557434?b=1&k=20&m=1213557434&s=170667a&w=0&h=aLaNN7mHtTYdEgSubEupIc57mIJlI9mTdEqwNIBu6jA=",
        postTime: "11 hours ago",
        postCaption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi dolorum eveniet similique aut explicabo quibusdam sit corporis qui maxime.",
        images: [ "https://media.istockphoto.com/photos/mother-and-son-using-a-digital-tablet-picture-id1414230245?b=1&k=20&m=1414230245&s=170667a&w=0&h=sEf4zArD6TQJTlVgVnxYoH9h48-ouw8lwXj2XaqZBLg="],
        commentCount: 100,
    },
    {
        name: "Tunji Olamide",
        username: "olatunjiof1",
        profilePic: "https://images.unsplash.com/photo-1512372923090-7b14fb496d44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        postTime: "12 hours ago",
        postCaption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi dolorum eveniet similique aut explicabo quibusdam sit corporis qui maxime.",
        images: [],
        commentCount: 220,
    },
    {
        name: "Levi Okoye",
        username: "levi.dev__",
        profilePic: "https://images.unsplash.com/photo-1584119164246-461d43e9bab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        postTime: "20 hours ago",
        postCaption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi dolorum eveniet similique aut explicabo quibusdam sit corporis qui maxime.",
        images: ["https://images.unsplash.com/photo-1664574654578-d5a6a4f447bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"],
        commentCount: 20,
    }
]
  return (
    <div className='main_container'>
      <Navigation />

      <div className="app_wrapper">
        <div className="leftBar">
          <LeftSideBar />
        </div>
        <div className="main_application">
          <NewPost />
            <br />
            <br />
            <br />
          {
            demoPosts.map((post) => (
              <React.Fragment>
                <Post post={post} />
              </React.Fragment>
            ))
          }
        </div>
        <div className="rightBar"></div>
      </div>
    </div>
  )
}
