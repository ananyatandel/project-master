import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Pmp from './tutorials/Pmp.jsx';
import Groups from './tutorials/groups.jsx';
import Stakeholder from './tutorials/stakeholder.jsx';
import stakeholderIMG from './assets/Stakeholder_Tutorial_Thumbnail.png';
import fivegroups from './assets/Five_Groups_Tutorial_Thumbnail.png';
import pmPlan from './assets/PMP_Tutorial_Thumbnail.png';
// import tutorialPlaceholderOne from './assets/Tutorial_Placeholder_1.png';
// import tutorialPlaceholderTwo from './assets/Tutorial_Placeholder_2.png';
// import tutorialPlaceholderThree from './assets/Tutorial_Placeholder_3.png';





function Tutorials() {
  const [display, setDisplay] = useState("Main")

  function loadTutorial(newDisplay){
    setDisplay(newDisplay) //Changes what is displayed
  }

  if (display == "Main"){
    return (
      <>
        <div className="mainGrid">

          <div className='tutorialBox'>
            <img src={pmPlan} alt="photo" className='docPhoto'/>
            <h2>Project Management Plan</h2>
            <button id="PmpTutorial" className='tutorialButton' onClick={()=>loadTutorial("PmpTutorial")}>Go to Tutorial</button>
          </div>

          <div className='tutorialBox'>
            <img src={fivegroups} alt="photo" className='docPhoto'/>
            <h2>Five Groups of Project Management</h2>
            <button id="GroupsTutorial" className='tutorialButton' onClick={()=>loadTutorial("GroupsTutorial")}>Go to Tutorial</button>
          </div>

          <div className='tutorialBox'>
            <img src={stakeholderIMG} alt="photo" className='docPhoto'/>
            <h2>Stakeholder Management</h2>
            <button id="StakeholderTutorial" className='tutorialButton' onClick={()=>loadTutorial("StakeholderTutorial")}>Go to Tutorial</button>
          </div>

        </div>
      </>
    )
  }else if (display == "PmpTutorial"){
    return (
      <>
        <button className='backButton' onClick={()=>loadTutorial("Main")}>Back to Tutorials</button>
        <Pmp />
      </>
    )
  }
  else if (display == "GroupsTutorial"){
    return (
      <>
        <button className='backButton' onClick={()=>loadTutorial("Main")}>Back to Tutorials</button>
        <Groups />
      </>
      
    )
  }else if (display == "StakeholderTutorial"){
    return (
      <>
        <button className='backButton' onClick={()=>loadTutorial("Main")}>Back to Tutorials</button>
        <Stakeholder />
      </>
      
    )
  }else{
    return(
      <p>Error: tutorial not found</p>
    )
  }

  
}

export default Tutorials