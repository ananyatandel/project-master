import { useState } from 'react'
import GoogleDocsViewer from './components/GoogleDoc.jsx'

import PMPlan from './assets/PMPlan.png'
import StakeholderOrg from './assets/StakeholderOrg.png'
import TeamOrg from './assets/TeamOrg.png'
import './App.css'



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
  const [imageFour, setImageFour] = useState(PMPlan)
  const [titleFour, setTitleFour] = useState("Project Management Plan")


  const [clicked, setClick] = useState(false)

  function changeLink(newURL){
    setClick(true)
  }

  return (
    <>
      <div className='mainGrid'>


        <GoogleDocsViewer URL={urlOne} setURL={seturlOne} imageLink={imageOne} title={titleOne}></GoogleDocsViewer>
        <GoogleDocsViewer URL={urlTwo} setURL={seturlTwo} imageLink={imageTwo} title={titleTwo}></GoogleDocsViewer>
        <GoogleDocsViewer URL={urlThree} setURL={seturlThree} imageLink={imageThree} title={titleThree}></GoogleDocsViewer>
        <GoogleDocsViewer URL={urlFour} setURL={seturlFour} imageLink={imageFour} title={titleFour}></GoogleDocsViewer>
        <GoogleDocsViewer URL={urlFour} setURL={seturlFour} imageLink={imageFour} title={titleFour}></GoogleDocsViewer>
        <GoogleDocsViewer URL={urlFour} setURL={seturlFour} imageLink={imageFour} title={titleFour}></GoogleDocsViewer>
        
      
      </div>
    </>
  )
}

export default Documents