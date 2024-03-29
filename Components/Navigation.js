import { faChevronDown, faHome, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'

const Navigation = ({setsearchActive, searchActive, user}) => {
  const router = useRouter()

  
  return (
    <div className='navigation'>
        <div className="nav_logo_home">
            <div onClick={() => router.push('/')} className="nav_logo"> <div className="nav_img"></div> <span>Bearcats Connect</span></div>

           <a href="/"><button className='nav_home_btn'><FontAwesomeIcon icon={faHome} /> Home</button></a> 
        </div>

        <div className="nav_center_search">
            <div className="search_icn"><FontAwesomeIcon icon={faSearch} /></div>
            <div className="search_input"><input onFocus={() => setsearchActive(true)} type="text" placeholder='   Search posts and #hashtags' /></div>
            {/* !!!!REMEMBER TO CLEAR INPUT WHEN THE SEARCH BAR IS CLOSED!!!!!! */}
            <div style={{display: searchActive ? "block" : 'none'}} className="searchClose"><FontAwesomeIcon onClick={() => setsearchActive(false)} icon={faTimes} /></div>
        </div>

        <div className="nav_user_account">
            <div style={{background: `url(${user?.img})`}} className="user_image"></div>
            <div className="user_name">{user?.fName}</div>
            <div className="chevron_icn"><FontAwesomeIcon icon={faChevronDown} /></div>
        </div>

    </div>
  )
}

export default Navigation