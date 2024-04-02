import { useState } from 'react'
import GoogleDocsViewer from './components/GoogleDoc.jsx'

import PMPlan from './assets/PMPlan.png'
import StakeholderOrg from './assets/StakeholderOrg.png'
import TeamOrg from './assets/TeamOrg.png'
import tempPhoto1 from './assets/DocPlaceholder1.png'
import tempPhoto2 from './assets/DocPlaceholder2.png'
import tempPhoto3 from './assets/DocPlaceholder3.png'



function Documents() {
  const [urlOne, seturlOne] = useState("https://docs.google.com/document/d/13mBt-T9PUv_6EfeuZcDXJtyvsmw3T4h5-bz2-2B24ck/edit?usp=drive_link")
  const [imageOne, setImageone] = useState(PMPlan)
  const [titleOne, setTitleOne] = useState("Project Management Plan")

  const [urlTwo, seturlTwo] = useState("https://docs.google.com/drawings/d/1kuXSxSA0jFRBlE5rItl8hJctmijpH3xkZGABDmfCcnc/edit?usp=drive_link")
  const [imageTwo, setImageTwo] = useState(StakeholderOrg)
  const [titleTwo, setTitleTwo] = useState("Stakeholder Organization Chart")

  const [urlThree, seturlThree] = useState("https://docs.google.com/spreadsheets/d/1mXIaohNu7kQLMn8VdL65AJFa-j2L7YK20yOTHTMWzyU/edit?usp=drive_link")
  const [imageThree, setImageThree] = useState(TeamOrg)
  const [titleThree, setTitleThree] = useState("Team Organization Chart")

  const [urlFour, seturlFour] = useState("https://docs.google.com/document/d/13mBt-T9PUv_6EfeuZcDXJtyvsmw3T4h5-bz2-2B24ck/edit?usp=drive_link")
  const [imageFour, setImageFour] = useState(tempPhoto1)
  const [titleFour, setTitleFour] = useState("Placeholder")

  const [imageFive, setImageFive] = useState(tempPhoto2)
  const [imageSix, setImageSix] = useState(tempPhoto3)


  const [clicked, setClick] = useState(false)

  function changeLink(newURL){
    setClick(true)
  }

  return (
    <>
      <div className='gridContentPage'>
        <h1>Project Documents</h1>
        <p>Below are templates for the different project documents you might need while managing your project. You can click on the images to take you to the template. Once at the template simply make a copy of the template and click the <emp>change link</emp> button to insert your personalized link.</p>
      
        <div className='mainGrid'>
    
    
          <GoogleDocsViewer URL={urlOne} setURL={seturlOne} imageLink={imageOne} title={titleOne}></GoogleDocsViewer>
          <GoogleDocsViewer URL={urlTwo} setURL={seturlTwo} imageLink={imageTwo} title={titleTwo}></GoogleDocsViewer>
          <GoogleDocsViewer URL={urlThree} setURL={seturlThree} imageLink={imageThree} title={titleThree}></GoogleDocsViewer>
          <GoogleDocsViewer URL={urlFour} setURL={seturlFour} imageLink={imageFour} title={titleFour}></GoogleDocsViewer>
          <GoogleDocsViewer URL={urlFour} setURL={seturlFour} imageLink={imageFive} title={titleFour}></GoogleDocsViewer>
          <GoogleDocsViewer URL={urlFour} setURL={seturlFour} imageLink={imageSix} title={titleFour}></GoogleDocsViewer>
          
        
        </div>
      </div>
    </>
  )
}

export default Documents