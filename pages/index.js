import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import LeftSideBar from "../Components/LeftSideBar";
import Navigation from "../Components/Navigation";
import NewPost from "../Components/NewPost";
import NewPostExpanded from "../Components/NewPostExpanded";
import Post from "../Components/Post";
import SearchArea from "../Components/SearchArea";
import { getFeed, getLoggedInUser, verifyAuth } from "../lib/swr-hooks";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [user, setuser] = useState({
    fName: "",
    lName: "",
    img: ""
  })
  const router = useRouter()
  const {feed, feedValidating} = getFeed("all")

  useEffect(() => {
    verifyAuth('/', router)
    setuser(getLoggedInUser())
    // console.log(getLoggedInUser())
  }, [])
  



  const [searchActive, setsearchActive] = useState(false);
  const [newPostActive, setnewPostActive] = useState(false);
  const [addPhotoActive, setaddPhotoActive] = useState(false);
  //   !MAKE SURE TO CHANGE THE NAME OF ADDPOSSTACTIVE TO ADDPHOTOACTIVE _ CHNAGE AT INDEX.JS TOO
  const demoPosts = [
    {
      name: "Jamie Charlie",
      username: "theonlyjamie06",
      profilePic:
        "https://media.istockphoto.com/photos/headshot-portrait-of-happy-mixed-race-african-girl-wearing-glasses-picture-id1144287292?b=1&k=20&m=1144287292&s=170667a&w=0&h=fvNKa6QuUa--cNv-oUXaHUBx8deD9iWgegvn76CtG_M=",
      postTime: "3 hours ago",
      postCaption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi dolorum eveniet similique aut explicabo quibusdam sit corporis qui maxime.",
      images: [],
      commentCount: 20,
      orientation: [],
    },
    {
      name: "Jamie Charlie",
      username: "theonlyjamie06",
      profilePic:
        "https://media.istockphoto.com/photos/headshot-portrait-of-happy-mixed-race-african-girl-wearing-glasses-picture-id1144287292?b=1&k=20&m=1144287292&s=170667a&w=0&h=fvNKa6QuUa--cNv-oUXaHUBx8deD9iWgegvn76CtG_M=",
      postTime: "3 hours ago",
      postCaption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi dolorum eveniet similique aut explicabo quibusdam sit corporis qui maxime.",
      images: [
        "https://images.unsplash.com/photo-1654028859265-0e8b12a67aae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBmZW1hbGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8dGVjaG5vbG9neXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
      ],
      commentCount: 20,
      orientation: ["p", "p", "l"],
    },
    {
      name: "De-Andreaz Sanchez",
      username: "sanchezdeandreas",
      profilePic:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80",
      postTime: "9 hours ago",
      postCaption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi dolorum eveniet similique aut explicabo quibusdam sit corporis qui maxime.",
      images: [
        "https://images.unsplash.com/photo-1554919700-69c4bb11dde5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1505&q=80",
        "https://images.unsplash.com/photo-1618181622572-0cb15620aae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
      ],
      commentCount: 33,
      orientation: ["l", "l"],
    },
    {
      name: "Sandra Fox",
      username: "thesandrafoxsmith1",
      profilePic:
        "https://media.istockphoto.com/photos/smiling-young-woman-blogger-sit-on-sofa-looking-at-camera-picture-id1213557434?b=1&k=20&m=1213557434&s=170667a&w=0&h=aLaNN7mHtTYdEgSubEupIc57mIJlI9mTdEqwNIBu6jA=",
      postTime: "11 hours ago",
      postCaption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi dolorum eveniet similique aut explicabo quibusdam sit corporis qui maxime.",
      images: [
        "https://media.istockphoto.com/photos/mother-and-son-using-a-digital-tablet-picture-id1414230245?b=1&k=20&m=1414230245&s=170667a&w=0&h=sEf4zArD6TQJTlVgVnxYoH9h48-ouw8lwXj2XaqZBLg=",
      ],
      commentCount: 100,
      orientation: ["l"],
    },
    {
      name: "Tunji Olamide",
      username: "olatunjiof1",
      profilePic:
        "https://images.unsplash.com/photo-1512372923090-7b14fb496d44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      postTime: "12 hours ago",
      postCaption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi dolorum eveniet similique aut explicabo quibusdam sit corporis qui maxime.",
      images: [
        "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGUlMjBmZW1hbGV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdoaXRlJTIwZmVtYWxlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      ],
      commentCount: 220,
      orientation: ["p", "p"],
    },
    {
      name: "Levi Okoye",
      username: "levi.dev__",
      profilePic:
        "https://images.unsplash.com/photo-1584119164246-461d43e9bab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      postTime: "20 hours ago",
      postCaption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi dolorum eveniet similique aut explicabo quibusdam sit corporis qui maxime.",
      images: [
        "https://images.unsplash.com/photo-1664574654578-d5a6a4f447bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ],
      commentCount: 20,
      orientation: ["l"],
    },
    {
      name: "Levi Okoye",
      username: "levi.dev__",
      profilePic:
        "https://images.unsplash.com/photo-1584119164246-461d43e9bab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      postTime: "20 hours ago",
      postCaption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi dolorum eveniet similique aut explicabo quibusdam sit corporis qui maxime.",
      images: [
        "https://images.unsplash.com/photo-1505685679686-2490cab6217d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdoaXRlJTIwZmVtYWxlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdoaXRlJTIwZmVtYWxlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1536268150125-b9e9a2ae543c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ],
      commentCount: 20,
      orientation: ["l", "p", "l", "l"],
    },
    {
      name: "Levi Okoye",
      username: "levi.dev__",
      profilePic:
        "https://images.unsplash.com/photo-1584119164246-461d43e9bab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      postTime: "20 hours ago",
      postCaption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi dolorum eveniet similique aut explicabo quibusdam sit corporis qui maxime.",
      images: [
        "https://images.unsplash.com/photo-1505685679686-2490cab6217d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdoaXRlJTIwZmVtYWxlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdoaXRlJTIwZmVtYWxlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      ],
      commentCount: 20,
      orientation: ["l", "p", "l"],
    },
    {
      name: "Levi Okoye",
      username: "levi.dev__",
      profilePic:
        "https://images.unsplash.com/photo-1584119164246-461d43e9bab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      postTime: "20 hours ago",
      postCaption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi dolorum eveniet similique aut explicabo quibusdam sit corporis qui maxime.",
      images: [
        "https://images.unsplash.com/photo-1660528682188-1622cdac5896?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1660528682198-4043cefd291f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1660528682184-19548cd543e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ],
      commentCount: 20,
      orientation: ["l", "l", "l"],
    },
    {
      name: "Levi Okoye",
      username: "levi.dev__",
      profilePic:
        "https://images.unsplash.com/photo-1584119164246-461d43e9bab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      postTime: "20 hours ago",
      postCaption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi dolorum eveniet similique aut explicabo quibusdam sit corporis qui maxime.",
      images: [
        "https://images.unsplash.com/photo-1660528682188-1622cdac5896?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1660528682198-4043cefd291f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1660528682184-19548cd543e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1660528682175-656268db1a15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1660528682201-6bc3b7173654?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ],
      commentCount: 20,
      orientation: ["l", "l", "l", "l", "l"],
    },
  ];
  return (
    <div className="main_container">
      <div
        // onClick={() => setnewPostActive(false)}
        style={{ display: newPostActive ? "flex" : "none" }}
        className="newPostOverlay"
      >
        <NewPostExpanded user={user} setnewPostActive={setnewPostActive} setaddPhotoActive={setaddPhotoActive} addPhotoActive={addPhotoActive} />
      </div>
      <Navigation
        setsearchActive={setsearchActive}
        searchActive={searchActive}
        user={user}
      />

      <div className="app_wrapper">
        <div className="leftBar">
          <LeftSideBar user={user} />
        </div>
        <div className="main_application">
          {searchActive ? (
            <SearchArea />
          ) : (
            <React.Fragment>
              <NewPost user={user} setaddPhotoActive={setaddPhotoActive} setnewPostActive={setnewPostActive} />
              <br />
              <br />
              <br />
              {feedValidating ? (
                <h3>Loading...</h3>
              ) : feed?.map((post, index) => (
                <React.Fragment key={index}>
                 <Post user={user} post={post} />
                </React.Fragment>
              ))}
            </React.Fragment>
          )}
        </div>
        <div className="rightBar"></div>
      </div>
    </div>
  );
}
