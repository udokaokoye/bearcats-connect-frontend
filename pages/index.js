import LeftSideBar from '../Components/LeftSideBar'
import Navigation from '../Components/Navigation'
import NewPost from '../Components/NewPost'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='main_container'>
      <Navigation />

      <div className="app_wrapper">
        <div className="leftBar">
          <LeftSideBar />
        </div>
        <div className="main_application">
          <NewPost />
        </div>
        <div className="rightBar"></div>
      </div>
    </div>
  )
}
