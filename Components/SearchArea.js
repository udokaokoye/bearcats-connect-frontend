import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SearchArea = () => {
  const demoCounter = [1, 2, 3];
  return (
    <div className="searchAreaContainer">
      <div className="recent_searches">
        <h3>Recent Searches</h3>
        <hr className="title_breaker" />

        {demoCounter.map((ct) => (
            <React.Fragment>
          <div className="recent_search_entry">
            <div className="profile_img">
              <div className="img"></div>
            </div>

            <div className="profile_info">
              <span className="username">James Samuel</span>
              <br />
              <span className="user_major">Pre-Bussiness</span>
            </div>

            <div className="clearSearch">
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
        <hr />
        </React.Fragment>
        
        ))}
      </div>

      <div className="trending_searches">
        <h3>Trending #Hashtags</h3>
        <hr className="text_breaker" />

        {
            demoCounter.map((ct) => (
                <React.Fragment>
                    <div className="trending_tag_entry">
            <div className="search_icn"><FontAwesomeIcon  icon={faSearch}/></div>

            <div className="hashtag_info">
            <span className="tag_name">#BearcatsGame</span>
            <br />
            <div className="tag_location">UCBA</div>
        </div>

        <div className="clearSearch"><FontAwesomeIcon icon={faTimes} /></div>
        </div>
        <hr />
                </React.Fragment>
            ))
        }


      </div>
    </div>
  );
};

export default SearchArea;
