import React, { useState, useEffect } from "react";
import { mutate } from "swr";
import { getComments } from "../lib/swr-hooks";
import AddComment from "./AddComment";
import Tooltip from "./Tooltip";

const Comment = ({ comment, reply, user, postAuthorId }) => {
  const [viewReply, setviewReply] = useState(false);
  const [showCommentInput, setshowCommentInput] = useState(false);
  const [commentAdded, setcommentAdded] = useState(0);
  const [showToolTip, setshowToolTip] = useState(false)
  const {allComment, isValidating} = getComments(comment.post_id)
  useEffect(() => {
    mutate(
      `http://192.168.1.51/bearcats_connect/getPost.php?postId=${comment.post_id}`
    );
  }, [commentAdded]);

  useEffect(() => {
    // console.log(allComment)
  }, [])
  

  return (
    <div className="comment-container">
      <div
        style={{ background: `url(${comment?.profile_picture})` }}
        className="userProfile"
      ></div>
      <div className="commentDetails">
        <div className="radius_div">
          <span className="comment_user_name">
            <span>
              {comment.firstName} {comment.lastName}
            </span>{" "}
            <span onClick={() => setshowToolTip(!showToolTip)} style={{ position: "relative" }}>
              <span className="tooltipdots">...</span>
              <div style={{display: showToolTip ? 'block' : 'none'}} className="toolTipCont">
                <Tooltip contentType={'comment'} content={[comment.id, comment.post_id]} owner={user?.userId == postAuthorId} />
              </div>
            </span>
          </span>

          <p className="user_comment">{comment.comment}</p>
        </div>
        <div className="raction_cont">
          <span>Like</span>{" "}
          <span onClick={() => setshowCommentInput(!showCommentInput)}>
            Reply
          </span>{" "}
          <span>3h ago</span>
        </div>
        <span className="view_reply" onClick={() => setviewReply(!viewReply)}>
          {reply?.length <= 0 ? "" : "View Reply"}
        </span>
        {showCommentInput ? (
          <AddComment
            user={user}
            size={30}
            inputHeight="70"
            setcommentAdded={setcommentAdded}
            pid={comment.post_id}
            replyId={comment?.id}
          />
        ) : (
          ""
        )}
        {reply?.length <= 0 || !viewReply ? (
          " "
        ) : (
          <>
            <hr className="replyBreaker" />
            <div className="replyCommentDiv">
              {reply?.map((rep) => (
                <Comment
                  comment={rep}
                  reply={allComment?.filter(
                    (e) => e.reply_id !== "null" && e.reply_id == rep.id
                  )}
                  user={user}
                  postAuthorId={postAuthorId}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Comment;
