import { faMarkdown, faSlack } from "@fortawesome/free-brands-svg-icons";
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
// import Image from "next/image";
import PostMedia from "./PostMedia";

const NewPostExpanded = ({
  setnewPostActive,
  setaddPhotoActive,
  addPhotoActive,
  user
}) => {
  const [tagPeopleActive, settagPeopleActive] = useState(false);
  const [addLocationActive, setaddLocationActive] = useState(false);
  const [previewImageActive, setpreviewImageActive] = useState(false)
  //   const [demoState, setdemoState] = useState([]);
  const [uploadedImageList, setuploadedImageList] = useState([]);

//   !INPUT STATES
  const [locationEntry, setlocationEntry] = useState("");
  const [caption, setcaption] = useState("")
  const [uploadFiles, setuploadFiles] = useState([])
  const [orientations, setorientations] = useState([])
  const initialLocationList = [
    {
      id: 1,
      name: "Muntz Hall",
      campus: "UCBA",
    },

    {
        id: 2,
      name: "Progress Hall",
      campus: "UCBA",
    },

    {
        id: 3,
      name: "Walters Hall",
      campus: "UCBA",
    },

    {
        id: 4,
      name: "Gators Hall",
      campus: "Clifton",
    },

    {
        id: 5,
      name: "Flowry Hall",
      campus: "Cleremount",
    },

    {
        id: 6,
      name: "Flowry Hall",
      campus: "Cleremount",
    },

    {
        id: 7,
      name: "Flowry Hall",
      campus: "Cleremount",
    },

    {
        id: 8,
      name: "Flowry Hall",
      campus: "Cleremount",
    },
  ];
  const [locationList, setlocationList] = useState(initialLocationList);


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
        var objectUrl = URL.createObjectURL(file)
        setuploadedImageList((current) => [...current, objectUrl])
        setpreviewImageActive(true)
        var image = new Image();
        image.onload = function () {
            if (this.width > this.height) {
                // console.log("l")
                setorientations((current) => [...current, 'l'])
            } else if(this.width < this.height) {
                // console.log("p")
                setorientations((current) => [...current, 'p'])
            } else {
                // console.log("l")
                setorientations((current) => [...current, 'l'])
            }


        URL.revokeObjectURL(objectUrl)
        }

        image.src = objectUrl;
        setuploadFiles((current) => [...current, file]);

    });
  };

  const submitPostHandler = () => {
    const formData = new FormData();    
    formData.append("userId", 3)
    formData.append("caption", caption)
    formData.append("location", locationEntry)
    formData.append("orientation", orientations)
    if (typeof window !== "undefined") {
        // console.log(document.getElementById("imageUpload").files);
                var ins = document.getElementById('imageUpload').files.length;
        if (ins > 0) {
            for (var x = 0; x < ins; x++) {
                formData.append("files[]", document.getElementById('imageUpload').files[x]);
            }
        }
    }
    

    fetch('http://localhost/bearcats_connect/posts.php', {
        method: "POST",
        body: formData
    }).then((res) => res.json()).then((data) => {
        console.log(data)
    })
  }


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
        <div style={{background: `url(${user?.img})`}} className="profile_pic"></div>
        <div className="profile_info">
          <span className="username">{user.fName + " " + user.lName}</span> <br />{" "}
          <span className="user_major">{user?.major}</span>
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
          onChange={(e) => setcaption(e.target.value)}
          className="post_entry_field"
          placeholder={`what's on your mind, ${user?.fName}?`}
        ></textarea>
      </div>

      {/* THIS WILL SERVE AS AN AREA FOR ALL OTHER POST OPTIONS, THISS WILL CHANGE BASED ON WHAT STATE IS ACTIVE */}

      <div
        style={{ display: addPhotoActive && uploadedImageList.length <1 ? "block" : "none" }}
        className="addImageSection"
      >
        <div className="addImageArea">
          <label
            // style={{
            // //   background: demoState.length > 0 ? `url(${demoState[0]})` : "",
            // }}
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

      <div style={{display: uploadedImageList.length >=1 && previewImageActive ? "flex" : "none"}} className={`previewImgArea `}>
        <label htmlFor="imageUpload" className="floatingButton"><FontAwesomeIcon icon={faImages} /> Add Photos/Videos</label>
        <button onClick={() => {
            setuploadedImageList([])
            setuploadFiles([])
            setorientations([])
            if (typeof window !== "undefined") {
                document.getElementById('imageUpload').value = []
            }
        }} className="floatingCloseBtn"><FontAwesomeIcon icon={faTimes} /></button>
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
            <div onClick={() => {
                setlocationEntry(location.id)
                setaddLocationActive(false)
            }} key={index} className="locationEntry">
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
            onClick={() => {
                setaddLocationActive(false)
                settagPeopleActive(false)
                setpreviewImageActive(true)
                setaddPhotoActive(!addPhotoActive)
            }}
            className="optionContainer addImage"
            title="Add Image"
          >
            <FontAwesomeIcon icon={faImage} />
          </div>

          <div
            onClick={() => {
                setaddLocationActive(false);
                setpreviewImageActive(false)
                setaddPhotoActive(false);
                settagPeopleActive(!tagPeopleActive)
            }}
            className="optionContainer tagUser"
            title="Tag a User"
          >
            <FontAwesomeIcon icon={faUserPlus} />
          </div>

          <div className="optionContainer smile" title="Add Feeling">
            <FontAwesomeIcon icon={faSmile} />
          </div>
          <div
            onClick={() => {
                setpreviewImageActive(false)
                setaddPhotoActive(false);
                settagPeopleActive(false)
                setaddLocationActive(!addLocationActive)
            }}
            className="optionContainer location"
            title="Add Location"
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
        </div>
      </div>

      {/* <br /> */}

      <button onClick={() => submitPostHandler()} className="postBtn">Post</button>
    </div>
  );
};

export default NewPostExpanded;
