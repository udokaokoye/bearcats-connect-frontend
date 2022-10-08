import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navigation = () => {
  return (
    <div className='navigation'>
        <div className="nav_logo_home">
            <div className="nav_logo"></div>

            <button><FontAwesomeIcon icon={faHome} /> Home</button>
        </div>

        <div className="nav_center_search">

        </div>

        <div className="nav_user_account">

        </div>

    </div>
  )
}

export default Navigation