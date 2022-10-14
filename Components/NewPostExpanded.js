import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import {
  faFlask,
  faImage,
  faImages,
  faMapMarkerAlt,
  faMarker,
  faSearch,
  faSmile,
  faTimes,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import PostMedia from "./PostMedia";

const NewPostExpanded = ({
  setnewPostActive,
  setaddPhotoActive,
  addPhotoActive,
}) => {
  const [tagPeopleActive, settagPeopleActive] = useState(false);
  const [addLocationActive, setaddLocationActive] = useState(false);
  const [locationEntry, setlocationEntry] = useState("");
  const [demoState, setdemoState] = useState([]);
  const [uploadedImageList, setuploadedImageList] = useState([]);
  const [locationList, setlocationList] = useState([
    {
      name: "Muntz Hall",
      campus: "UCBA",
    },

    {
      name: "Progress Hall",
      campus: "UCBA",
    },

    {
      name: "Walters Hall",
      campus: "UCBA",
    },

    {
      name: "Gators Hall",
      campus: "Clifton",
    },

    {
      name: "Flowry Hall",
      campus: "Cleremount",
    },

    {
      name: "Flowry Hall",
      campus: "Cleremount",
    },

    {
      name: "Flowry Hall",
      campus: "Cleremount",
    },

    {
      name: "Flowry Hall",
      campus: "Cleremount",
    },
  ]);
  const initialLocationList = [
    {
      name: "Muntz Hall",
      campus: "UCBA",
    },

    {
      name: "Progress Hall",
      campus: "UCBA",
    },

    {
      name: "Walters Hall",
      campus: "UCBA",
    },

    {
      name: "Gators Hall",
      campus: "Clifton",
    },

    {
      name: "Flowry Hall",
      campus: "Cleremount",
    },

    {
      name: "Flowry Hall",
      campus: "Cleremount",
    },

    {
      name: "Flowry Hall",
      campus: "Cleremount",
    },

    {
      name: "Flowry Hall",
      campus: "Cleremount",
    },
  ];

  const locationListFilter = (e) => {
    // alert(e.target.value)
    setlocationList(
      initialLocationList.filter((loct) =>
        loct.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const previewImages = (files) => {
    // setdemoState(URL.createObjectURL(files))
    if (typeof window !== "undefined") {
      //     const img = document.getElementById('hey');
      // img.src = URL.createObjectURL(files)
    //   console.log(uploadedImageList.length);
    }
  };

  const imgprev = (ev) => {
    if (!ev.target.files) return; // Do nothing.
    [...ev.target.files].forEach((file) => {
        setuploadedImageList((current) => [...current, URL.createObjectURL(file)])
        URL.revokeObjectURL(file)
    //   uploadedImageList.push();
    //   previewImages(file);
    });
  };


  // !Create a function that clearss all state when we close the add post modal.

  return (
    <div className="newPostExpandedContainer">
      <div className="header_bar">
        <span className="headerTitle">Create Post</span>
        <div
          onClick={() => {
            setnewPostActive(false);
            setaddPhotoActive(false);
            settagPeopleActive(false);
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

      <div
        style={{
          display: tagPeopleActive || addLocationActive ? "none" : "block",
        }}
        className="post_entry"
      >
        <textarea
          //   contentEditable={true}
          className="post_entry_field"
          placeholder="what's on your mind, Levi?"
        ></textarea>
      </div>

      {/* THIS WILL SERVE AS AN AREA FOR ALL OTHER POST OPTIONS, THISS WILL CHANGE BASED ON WHAT STATE IS ACTIVE */}

      <div
        style={{ display: addPhotoActive && uploadedImageList.length <1 ? "block" : "none" }}
        className="addImageSection"
      >
        <div className="addImageArea">
          <label
            style={{
              background: demoState.length > 0 ? `url(${demoState[0]})` : "",
            }}
            htmlFor="imageUpload"
          >
            <div
              onClick={() => setaddPhotoActive(false)}
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
        <input
          accept="image/*, video/*"
          type="file"
          id="imageUpload"
          multiple
          onChange={(e) => imgprev(e)}
        />


      </div>

      <div style={{display: uploadedImageList.length >=1 ? "flex" : "none"}} className={`previewImgArea `}>
        <label htmlFor="imageUpload" className="floatingButton"><FontAwesomeIcon icon={faImages} /> Add Photos/Videos</label>
        <button onClick={() => setuploadedImageList([])} className="floatingCloseBtn"><FontAwesomeIcon icon={faTimes} /></button>
          <div className="col_1">
            <div className="preview_wrapper">
              <img
                className="previewImage"
                src={uploadedImageList[0]}
              />
            </div>

            <div style={{display: uploadedImageList.length >= 3 ? 'block' : 'none'}} className="preview_wrapper">
              <img
                className="previewImage"
                src={ uploadedImageList.length >2 ? uploadedImageList[1] : ''}
              />
            </div>
          </div>

          <div style={{display: uploadedImageList.length >=2 ? 'flex' : 'none' }} className="col_2">
          <div className="preview_wrapper">
              <img
                className="previewImage"
                src={ uploadedImageList.length <= 2 ? uploadedImageList[1] : uploadedImageList[2]}
              />
            </div>

            <div style={{display: uploadedImageList.length >=4 ? 'block' : 'none'}} className="preview_wrapper">
              <img
                className="previewImage"
                src={uploadedImageList[3]}
              />
            </div>
          </div>
        </div>

      <div
        style={{ display: tagPeopleActive ? "block" : "none" }}
        className="tagPeopleArea"
      >
        <div className="searchArea">
          <div className="inputwithIcon">
            <FontAwesomeIcon icon={faSearch} />{" "}
            <input type="text" placeholder="Search for friends" />
          </div>{" "}
          <span onClick={() => settagPeopleActive(false)}>Done</span>
        </div>
        <p>No people found</p>
      </div>

      <div
        style={{ display: addLocationActive ? "block" : "none" }}
        className="addLocation"
      >
        <div className="searchArea">
          <div className="searchIcn">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input
            onChange={(e) => locationListFilter(e)}
            type="text"
            placeholder="Where are you?"
          />
        </div>

        <div className="locationList">
          {locationList.map((location, index) => (
            <div key={index} className="locationEntry">
              <div className="locationIcn">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="locationInfo">
                <span>{location.name}</span>
                <br />
                <span>{location.campus} Campus</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="addPostOptions">
        <span>Add to your post</span>
        <div className="postOptions">
          <div
            onClick={() => setaddPhotoActive(!addPhotoActive)}
            className="optionContainer addImage"
            title="Add Image"
          >
            <FontAwesomeIcon icon={faImage} />
          </div>

          <div
            onClick={() => settagPeopleActive(!tagPeopleActive)}
            className="optionContainer tagUser"
            title="Tag a User"
          >
            <FontAwesomeIcon icon={faUserPlus} />
          </div>

          <div className="optionContainer smile" title="Add Feeling">
            <FontAwesomeIcon icon={faSmile} />
          </div>
          <div
            onClick={() => setaddLocationActive(!addLocationActive)}
            className="optionContainer location"
            title="Add Location"
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
        </div>
      </div>

      {/* <br /> */}

      <button onClick={() => console.log(uploadedImageList)} className="postBtn">Post</button>
    </div>
  );
};

export default NewPostExpanded;
