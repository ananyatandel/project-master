import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Pmp from './tutorials/Pmp.jsx';
import Groups from './tutorials/Groups.jsx';
import Stakeholder from './tutorials/Stakeholder.jsx';

function Tutorials() {
  const [display, setDisplay] = useState("Main")

  function loadTutorial(newDisplay){
    setDisplay(newDisplay) //Changes what is displayed
  }

  if (display == "Main"){
    return (
      <>
        <div id="tutorialsMain">

            <button id="PmpTutorial" className='tutorialButton' onClick={()=>loadTutorial("PmpTutorial")}>Project Management Plan</button>
            <button id="GroupsTutorial" className='tutorialButton' onClick={()=>loadTutorial("GroupsTutorial")}>5 Groups of Processes</button>
            <button id="StakeholderTutorial" className='tutorialButton' onClick={()=>loadTutorial("StakeholderTutorial")}>Stakeholder Management</button>

        </div>
      </>
    )
  }else if (display == "PmpTutorial"){
    return (
      <Pmp />
    )
  }
  else if (display == "GroupsTutorial"){
    return (
      <Groups />
    )
  }else if (display == "StakeholderTutorial"){
    return (
      <Stakeholder />
    )
  }else{
    return(
      <p>Error: tutorial not found</p>
    )
  }

  
}

export default Tutorials