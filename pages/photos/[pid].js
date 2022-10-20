import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faComment, faHeart, faThumbsUp, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Comment from "../../Components/Comment";
import LeftSideBar from "../../Components/LeftSideBar";
import Navigation from "../../Components/Navigation";
import { getLoggedInUser } from "../../lib/swr-hooks";

const Photos = () => {
  useEffect(() => {
    setuser(getLoggedInUser());
  }, []);

  const [user, setuser] = useState({
    fname: "",
    lNmae: "",
    img: "",
  });
  const router = useRouter();
  const pid = router.query.pid;
  return (
    <div className="main_container">
        <div onClick={() => router.back()} className="closePostBtn"><FontAwesomeIcon icon={faTimes} /></div>
      <div className="pid_application">
        <div className="mediaContainer"></div>
        <div className="postInfoContainer">
            <div className="AuthorCaption">
                <div className="author">
                    <div className="authorImg"></div>
                    <div className="authorName">
                        <p>Username Lastname</p>
                        <span className="postDate">8m.</span>
                    </div>
                    <span className="moreOptions">...</span>
                </div>

                <div className="postCaption">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, magni? Nostrum, blanditiis soluta? Aut neque ab perferendis earum saepe, quasi similique ipsum delectus dolor commodi repudiandae, quod, deserunt doloremque id!
                </div>

                <div className="reactionsComments">
                    <span className="reaction"> <FontAwesomeIcon icon={faHeart} color={"red"} /> 10</span>
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
