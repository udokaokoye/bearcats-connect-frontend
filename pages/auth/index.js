import {
  faImage,
  faImages,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import AuthHeader from "../../Components/AuthHeader";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useCookies } from "react-cookie";
import Cookies from 'js-cookie'
import { getLoggedInUser, LoggedIn, verifyAuth } from "../../lib/swr-hooks";
import { useRouter } from "next/router";
const Auth = () => {
  // const [cookies, setCookie, removeCookie] = useCookies()
  const router = useRouter()
  useEffect(() => {
    verifyAuth('/', router)
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
  }, [])
  



  var today = new Date();
  const [authMode, setauthMode] = useState("signup");
  const [continueSignUp, setcontinueSignUp] = useState(false);
  const [previewImages, setpreviewImages] = useState(false);
  const [token, settoken] = useState('')

  // ! SIGNUP STATES
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [signupEmail, setsignupEmail] = useState("");
  const [signupUsername, setsignupUsername] = useState("");
  const [signupPassword, setsignupPassword] = useState("");
  const [signupPasswordConfirm, setsignupPasswordConfirm] = useState("");

  // ! Continue Signup States
  const [major, setmajor] = useState("");
  const [bio, setbio] = useState("");
  const [mobile, setmobile] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const [coverPic, setcoverPic] = useState("");
  const [userId, setuserId] = useState("")

  // ! LOGIN STATES
  const [loginEmailUsername, setloginEmailUsername] = useState("");
  const [loginPassword, setloginPassword] = useState("");

  // !Error States
  const [formError, setformError] = useState(false);
  const [confirmPasswordError, setconfirmPasswordError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const [usernameError, setusernameError] = useState(false);
  const [emailError, setemailError] = useState(false);
  const [invalidEmail, setinvalidEmail] = useState(false);
  const [emailFound, setemailFound] = useState(false)
  const [usernameFound, setusernameFound] = useState(false)


  const confirmPassword = (e) => {
    if (e !== signupPassword) {
      setconfirmPasswordError(true);
      return false;
    } else {
      setconfirmPasswordError(false);
      return true;
    }
    return false;
  };

  const passswordAlgo = (password) => {
    if (password.length < 6 
      // || password.match(/[a-z]+/) 
      // || password.match(/[A-Z]+/) 
      // || password.match(/[0-9]+/)
      ) {
      setpasswordError(true);
      return false;

    } else {
      setpasswordError(false);
      return true;
    }
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const checkIfEmailUsernameExists = () => {
    const formData = new FormData()
    formData.append('email', signupEmail)
    formData.append("username", signupUsername)
    fetch(`http://localhost/bearcats_connect/helpers.php?helper=checkUsernamePassword`, {
      method: "POSST", 
      body: formData
    }).then((res) => res.json()).then((data) => {
      if (data.includes("user found")) {
        setusernameFound(true)
        return false
      } else if (data.includes("email found")) {
        setemailFound(true)
        return false
      }
      
      console.log(data)
    })
  }

  const handelSigUp = () => {
    const formData = new FormData();
    if (
      fName == "" ||
      lName == "" ||
      signupEmail == "" ||
      signupUsername == "" ||
      signupPassword == "" ||
      !confirmPassword(signupPasswordConfirm) ||
      !validateEmail(signupEmail) ||
      !passswordAlgo(signupPassword)
    ) {
      if (!signupEmail.includes("@mail.uc.edu")) {
        setinvalidEmail(true);
        return false;
      }
      setformError(true);
      console.log("Form Error");
      return false;
    } else if (!signupEmail.includes("@mail.uc.edu")) {
      setinvalidEmail(true);
      return false;
    } else {
      checkIfEmailUsernameExists()
      formData.append("firstName", fName)
      formData.append("lastName", lName)
      formData.append("email", signupEmail)
      formData.append("username", signupUsername)
      formData.append("password", signupPassword)


      fetch("http://localhost/bearcats_connect/signup.php", {
        method: "POST",
        body: formData
      }).then((res) => res.json()).then((data) => {
        if (data[0] == "SUCCESS") {
          setcontinueSignUp(true)
          setuserId(data[1])
          settoken(data[2])
          Cookies.set("user-token", data[2], {expires: new Date(new Date().setDate(today.getDate() + 30))})
        }
        // console.log(data)
      })
    }
  };

  const handelContinueSignUp = () => {
   const formData = new FormData;
  //  console.log(userId)
   formData.append("userId", userId)
   formData.append("major", major)
   formData.append("bio", bio)
   formData.append("mobile", mobile)
  //  formData.append("cover_picture", null)
  //  formData.append("profile_picture", null)

   if (typeof window !== "undefined") {
    if (document.getElementById("pp").files !==null) {
      formData.append("profile_picture", document.getElementById("pp").files[0])
    }

    if (document.getElementById("cc").files !==null) {
      formData.append("cover_picture", document.getElementById("pp").files[0])
    }
  }
   formData.append("cover_picture", null)

    fetch("http://localhost/bearcats_connect/signup.php?continueSignUp=true", {
      method: "POST",
      body: formData
    }).then((res) => res.json()).then((data) => {
      console.log(data)
      if (data == "UPDATED") {
        router.push("/")
      }
    })
  }

  const imgprev = (ev, section) => {
    if (!ev.target.files) return; // Do nothing.
    setpreviewImages(true);
    var objectUrl = URL.createObjectURL(ev.target.files[0]);
    // setuploadedImageList((current) => [...current, objectUrl])
    console.log(objectUrl);
    if (section == "pp") {
      console.log("pp");
      setprofilePic(objectUrl);
      // URL.revokeObjectURL(objectUrl)
    } else {
      console.log("cc");
      setcoverPic(objectUrl);
    }
    setTimeout(() => {
      URL.revokeObjectURL(objectUrl);
    }, 2000);

    // })
  };
  return (
    <div className="authContainer">
      <AuthHeader />

      <div className="authmain">
        <div className="artContainer">
          <div className="logoArt"></div>
          <div className="logoArtText"></div>
        </div>

        <div className="authForm">
          <h3>
            {continueSignUp
              ? "All done! Finish Setting Up Your Profile"
              : "Let's Get You Signed Up!"}
          </h3>

          {continueSignUp ? (
            <div data-aos-duration="1000" data-aos="fade-up">
              <label htmlFor="cc" className="addProfileImages">
                {coverPic !== "" ? (
                  <React.Fragment>
                    <img className="cc" src={coverPic} alt="" />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <FontAwesomeIcon icon={faImages} />
                    <h3>Select a Cover Photo</h3>
                  </React.Fragment>
                )}
                {/* <img className="cc" src="" alt="" /> */}
                {profilePic !== "" ? (
                  <React.Fragment>
                    <img className="pp" src={profilePic} alt="" />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <label htmlFor="pp" className="pp">
                      <FontAwesomeIcon icon={faUserPlus} />
                      {/* <p>add +</p> */}
                    </label>
                  </React.Fragment>
                )}
                <input
                  accept="image/*"
                  type="file"
                  id="pp"
                  onChange={(e) => imgprev(e, "pp")}
                />
                <input
                  accept="image/*"
                  type="file"
                  id="cc"
                  onChange={(e) => imgprev(e, "cc")}
                />
              </label>
              <div className="fieldEntry textareaField">
                <label htmlFor="">Bio</label>
                <textarea onChange={(e) => setbio(e.target.value)} value={bio} placeholder="Discribe yourself..."></textarea>
              </div>
              <div className="fields ">
                <div className="fieldEntry">
                  <label htmlFor="">What's your major?</label>
                  <select onChange={(e) => setmajor(e.target.value)} defaultValue="hey" name="" id="">
                    <option value="defalult1">Select a major</option>
                    <option value="defalult2">Select a major2</option>
                    <option value="defalult3">Select a major3</option>
                  </select>
                </div>

                <div className="fieldEntry">
                  <label htmlFor="">Mobile Number</label>
                  <input onChange={(e) => setmobile(e.target.value)} value={mobile} type="tel" placeholder="mobile" />
                </div>
              </div>

              <button onClick={() => handelContinueSignUp()}>Finish!</button>
            </div>
          ) : (
            <div data-aos-duration="1000" data-aos="fade-up">
              <div className="fields">
                <div className="fieldEntry">
                  <label>First Name</label>
                  <input
                    value={fName}
                    onChange={(e) => setfName(e.target.value)}
                    type="text"
                  />
                </div>

                <div className="fieldEntry">
                  <label>Last Name</label>
                  <input
                    value={lName}
                    onChange={(e) => setlName(e.target.value)}
                    type="text"
                  />
                </div>
              </div>

              <div className="fieldEntry">
                <label>Email</label>
                <input
                  value={signupEmail}
                  onChange={(e) => setsignupEmail(e.target.value)}
                  type="email"
                />
                <small>
                  {emailError ? "hmm...looks like that's taken" : ""}
                </small>
                <small>
                  {invalidEmail ? "please enter a vaild UC email" : ""}
                </small>
              </div>

              <div className="fieldEntry">
                <label>Username</label>
                <input
                  value={signupUsername}
                  onChange={(e) => setsignupUsername(e.target.value)}
                  type="text"
                />
                <small>
                  {usernameError ? "hmm...looks like that's taken" : ""}
                </small>
              </div>
              <div className="fields">
                <div className="fieldEntry">
                  <label>Password</label>
                  <input
                    style={{
                      outlineColor: passwordError ? "red" : "transparent",
                    }}
                    value={signupPassword}
                    onChange={(e) => setsignupPassword(e.target.value)}
                    type="password"
                  />
                  <small>
                    {passwordError ? (
                      <React.Fragment>
                        <span>please check password</span>
                        <br />
                        <span>
                          password must be greater than six characters and must
                          contain a number
                        </span>
                        <br />
                        <br />
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                  </small>
                </div>

                <div className="fieldEntry">
                  <label>Confirm Password</label>
                  <input
                    style={{
                      outlineColor: confirmPasswordError ? "red" : "green",
                    }}
                    value={signupPasswordConfirm}
                    onChange={(e) => {
                      setsignupPasswordConfirm(e.target.value);
                      confirmPassword(e.target.value);
                    }}
                    type="password"
                  />
                  <small>
                    {confirmPasswordError ? "password does not match" : null}
                  </small>
                </div>
              </div>

              <br />
              <br />
              <button onClick={() => handelSigUp()}>Sign Up!</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
