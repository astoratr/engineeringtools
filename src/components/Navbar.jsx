import Astor from '../assets/astor.png';
import About from '../assets/about.png';
import edit from '../assets/edit.png'
import { NavLink } from 'react-router';
import './Navbar.css'

export function Nav({ toggleMenu, userName, setToggleUserDiag }) {
  function toggle() {
    setToggleUserDiag(true)
  }

  return (
    <>
      <nav className={toggleMenu ? 'menuClosed' : 'menuOpened'}>
        <div className='head-nav'>
          <img src={Astor} alt='' className='logo' />
          <h1>Product Details</h1>
          <div>
            @{userName || userName}
            <img
              src={edit} 
              alt=""
              className='edit_username cursor_pointer'
              title='edit'
              onClick={toggle}
            />
          </div>
        </div>
        <div className='mid1-nav'>
          <NavLink to="/phonedetails" >
            <img src='phone.png' alt="" />
            Phone Details
          </NavLink>

          <NavLink to="/laptopdetails">
            <img src='lap.png' alt="" />
            Laptop Details
          </NavLink>

          <NavLink to="/storagedetails">
            <img src='storage.jpg' alt="" />
            Storage Details
          </NavLink>

          <NavLink to="/tools">
            <img src='tool.png' alt="" />
            Tools
          </NavLink>

        </div>
        <footer> © 2026 Astor Multi-Tech. <br />All rights reserved.</footer>
      </nav>
    </>
  )
}