import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import {
  faFlask,
  faImage,
  faImages,
  faMapMarkerAlt,
  faMarker,
  faSmile,
  faTimes,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const NewPostExpanded = ({ setnewPostActive, setaddPostActive, addPostActive }) => {
//   !MAKE SURE TO CHANGE THE NAME OF ADDPOSSTACTIVE TO ADDPHOTOACTIVE _ CHNAGE AT INDEX.JS TOO

  // !Create a function that clearss all state when we close the add post modal.

  return (
    <div className="newPostExpandedContainer">
      <div className="header_bar">
        <span className="headerTitle">Create Post</span>
        <div
          onClick={() => {
            setnewPostActive(false);
            setaddPostActive(false);
          }}
          className="closeIcn"
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>

      <div className="userProfileInfo">
        <div className="profile_pic"></div>
        <div className="profile_info">
          <span className="username">Levi Okoye</span> <br />{" "}
          <span className="user_major">Information Technology</span>
        </div>
      </div>

      <div className="post_entry">
        <textarea
          contentEditable={true}
          className="post_entry_field"
          placeholder="what's on your mind, Levi?"
        ></textarea>
      </div>

      {/* THIS WILL SERVE AS AN AREA FOR ALL OTHER POST OPTIONS, THISS WILL CHANGE BASED ON WHAT STATE IS ACTIVE */}

      <div
        style={{ display: addPostActive ? "block" : "none" }}
        className="addImageSection"
      >
        <div className="addImageArea">
          <label htmlFor="imageUpload">
            <div
              onClick={() => setaddPostActive(false)}
              className="imageCloseIcn"
            >
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <div className="imagesIcn">
              <FontAwesomeIcon icon={faImages} />
            </div>
            <span>Add Photos/Videos</span>
            <span>or drag and drop</span>
          </label>
        </div>
        <input type="file" id="imageUpload" />
      </div>

      <div className="addPostOptions">
        <span>Add to your post</span>
        <div className="postOptions">
          <div
            onClick={() => setaddPostActive(!addPostActive)}
            className="optionContainer addImage"
            title="Add Image"
          >
            <FontAwesomeIcon icon={faImage} />
          </div>

          <div className="optionContainer tagUser" title="Tag a User">
            <FontAwesomeIcon icon={faUserPlus} />
          </div>

          <div className="optionContainer smile" title="Add Feeling">
            <FontAwesomeIcon icon={faSmile} />
          </div>
          <div className="optionContainer location" title="Add Location">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
        </div>
      </div>

      <button className="postBtn">Post</button>
    </div>
  );
};

export default NewPostExpanded;
