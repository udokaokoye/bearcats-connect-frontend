import React, {useState, useEffect} from "react";
import Navigation from "../../Components/Navigation";
import { getLoggedInUser } from "../../lib/swr-hooks";

const Profile = () => {
    const [user, setuser] = useState()
    useEffect(() => {
      setuser(getLoggedInUser())
    }, [])
    

    
  return (
    <div className="main_container">
        <Navigation user={user} />
      <div className="app_wrapper">
        <div className="leftBar"></div>

        <div className="main_application profile_main">
            <div className="profileInfoArea">
              <div style={{background: `url(${user.cover})`}} className="coverArea"></div>
              <div style={{background: `url(${user.img})`}} className="profilePicArea"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
