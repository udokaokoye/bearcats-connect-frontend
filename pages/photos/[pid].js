import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faChevronCircleLeft, faChevronDown, faChevronLeft, faChevronRight, faComment, faHeart, faThumbsUp, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Comment from "../../Components/Comment";
import LeftSideBar from "../../Components/LeftSideBar";
import Navigation from "../../Components/Navigation";
import { getLoggedInUser, getPost } from "../../lib/swr-hooks";
import Image from "next/image";

const Photos = () => {
  const router = useRouter();
  const pid = router.query.pid;
  const {post, postValidating} = getPost(pid)
  const [activeImageIndex, setactiveImageIndex] = useState(0)
  useEffect(() => {
    setuser(getLoggedInUser());
    !postValidating ? setactiveImageIndex(0) : ''
  }, []);

  // useEffect(() => {
  //   console.log(post)
  // }, [postValidating])
  

  const [user, setuser] = useState({
    fname: "",
    lNmae: "",
    img: "",
  });

  const slideImageHandler = (direction) => {
    // ! Direction is wher the user is sliding to either l(left) or r(right)
    // ! activeImageIndex is a state that holds the current index of the current displayed image
    // ! post?.images is an array of images
    if (direction == 'r') {
      if (post?.images.length == activeImageIndex + 1) {
        // console.log("true")
        setactiveImageIndex(0)
      } else  {
        setactiveImageIndex(activeImageIndex + 1)
      } 
    }

    if (direction == 'l') {
      if (activeImageIndex == 0) {
        setactiveImageIndex(post?.images.length - 1)
      } else {
        setactiveImageIndex(activeImageIndex - 1)
      }
    }

  }
  if (typeof window !== "undefined") {
    useEffect(() => {
      setTimeout(() => {
            document.getElementById('lowerThirdImage').style.opacity = 0.6
          }, 5000);
    }, [])
    

  // setTimeout(() => {
  //       document.getElementById('lowerThirdImage').style.opacity = 0.6
  //     }, 5000);
  
  document.getElementById('lowerThirdImage')?.addEventListener('mouseover', () => {
    document.getElementById('lowerThirdImage').style.opacity = 1
    setTimeout(() => {
      document.getElementById('lowerThirdImage').style.opacity = 0.6
    }, 5000);
  })
  
  }


  

  return (
    <div className="main_container">
        <div onClick={() => router.back()} className="closePostBtn"><FontAwesomeIcon icon={faTimes} /></div>
      <div className="pid_application">
        <div className="mediaContainer">


          <div className="mediaWrapper">
            <Image className="photoFile" src={post?.images[activeImageIndex]} layout='fill' />

            <div onClick={() => slideImageHandler("l")} className="leftArrow directionalArrows">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>

          <div className="lowerThirdImage" id="lowerThirdImage">
              {post?.images.slice(0,5).map((lowerImgFile, index) => (
                <div onClick={ () => setactiveImageIndex(index)} className={`lowerImgWrapper ${activeImageIndex == index ? 'activeImg' : null}`}>
                  <Image className="lowerImgFile" src={lowerImgFile} layout='fill' />
                </div>
              ))}
          </div>

          <div onClick={() => slideImageHandler("r")} className="rightArrow directionalArrows">
          <FontAwesomeIcon icon={faChevronRight} />
          </div>
          </div>

        </div>
        <div className="postInfoContainer">
            <div className="AuthorCaption">
                <div className="author">
                    <div style={{background: `url(${post?.profile_picture})`}} className="authorImg"></div>
                    <div className="authorName">
                        <p onClick={() => {console.log(post)}}>{post?.fName} {post?.lName}</p>
                        <span className="postDate">8m.</span>
                    </div>
                    <span className="moreOptions">...</span>
                </div>

                <div className="postCaption">
                    {post?.caption}
                </div>

                <div className="reactionsComments">
                    <span className="reaction"> <FontAwesomeIcon icon={faHeart} color={"red"} /> {post?.images.length}</span>
                    <span className="comments">20 comments</span>
                </div>

                <hr />

                <div className="reactComment">
                    <div className="reactBtns">
                        <div className="like"><FontAwesomeIcon icon={faHeart} /> Like</div>
                        <div className="comment"> <FontAwesomeIcon icon={faComment} /> Comment</div>
                    </div>

                    <div style={{background: `url(${user.img})`}} className="loggedinUserProfile"></div>
                </div>

                <hr />
            </div>

            <div className="comments">
                <span className="sortBtn"><span>Sort by</span> <FontAwesomeIcon icon={faChevronDown} /></span>
                <br />
                <div style={{padding: 10}}>
                <Comment />

                </div>
                <div style={{padding: 10}}>
                <Comment />
                </div>

                <div style={{padding: 10}}>
                <Comment />
                </div>

                <div className="commentEntry">
                    <div style={{background: `url(${user.img})`}} className="userImg"></div>
                    <div className="commentInput">
                        <input contentEditable={true} className="cmtInput" type="text" placeholder="Enter a comment"></input>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
