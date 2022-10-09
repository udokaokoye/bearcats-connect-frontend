import { faChevronDown, faHome, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navigation = () => {
  return (
    <div className='navigation'>
        <div className="nav_logo_home">
            <div className="nav_logo"> <div className="nav_img"></div> <span>Bearcats Connect</span></div>

            <button className='nav_home_btn'><FontAwesomeIcon icon={faHome} /> Home</button>
        </div>

        <div className="nav_center_search">
            <div className="search_icn"><FontAwesomeIcon icon={faSearch} /></div>
            <div className="search_input"><input type="text" placeholder='   Search posts and #hashtags' /></div>
        </div>

        <div className="nav_user_account">
            <div className="user_image"></div>
            <div className="user_name">Levi</div>
            <div className="chevron_icn"><FontAwesomeIcon icon={faChevronDown} /></div>
        </div>

    </div>
  )
}

export default Navigation