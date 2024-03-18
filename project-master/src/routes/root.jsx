import { useState } from 'react'
import { Outlet } from "react-router-dom";
import './root.css';
import purpleLogo from '../assets/new_purple_logo_no_title.png';
import Login from '../components/Login.jsx';


export default function Root() {
  const [showingLogin, changeLogin] = useState(true)

  function showLogin(){
    //Emma needs to work on this function that takes away the login page
    changeLogin(false)
  }

  return (
    <>
      <div id="navBar">
        <img src={purpleLogo} alt="Logo" id='logoImg'></img>
        
        <h1 id='logo'>Project Master</h1>
        
        <div className="navLinks">
          <a href={`./App`}>Dashboard</a>
          <a href={`./Documents`}>Documents Page</a>
          <a href={`./Tutorials`}>Tutorials Page</a>
        </div>
      </div>
      
      <div id="detail">
          <Outlet />
      </div>
    </>
  );


    
  }