import { Outlet } from "react-router-dom";
import './root.css';
import purpleLogo from '../assets/new_purple_logo_no_title.png';

export default function Root() {
    return (
      <>
        <div id="navBar">

          <img src={purpleLogo} alt="Logo" id='logoImg'></img>
          
          <h1 id='logo'>Project Master</h1>
          
          <div className="navLinks">
            <a href={`./Documents`}>Documents Page</a>
            <a href={`./Tutorials`}>Tutorials Page</a>
            <a href={`./App`}>Login Page</a>
          </div>
        </div>
        
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }