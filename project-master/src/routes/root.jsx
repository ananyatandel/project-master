import { Outlet } from "react-router-dom";
import './root.css';

export default function Root() {
    return (
      <>
        <div id="navBar">
          
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