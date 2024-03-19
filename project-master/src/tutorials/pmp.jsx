import { useState } from 'react'
import PMPImageOne from '../assets/inTextTutorialPictures/pmpImageOne.png'
import PMPImageTwo from '../assets/inTextTutorialPictures/pmpImageTwo.png'


function Pmp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='tutorialContentPage'>
        <h1>Project Mangement Plan</h1>
        <p>
          The first step in creating a project management plan is to understand how your 
          organization/company/department runs projects. Are there any mandatory resources 
          you are required to use? What resources are already available to you? Are there 
          any similar established projects?
        </p>

        <p>
          This plan is designed to help create a defined path towards the execution, monitor 
          and control and closing process. This plan will help guide you through the rest of 
          the project so it's important to set it up correctly. Here’s an example of what it looks like:
        </p>

        <img className='inTextTutorialImg' src={PMPImageOne} alt="Example Project Management Plan"/>

        <p>
          This plan is created with some input from key stakeholders. If you are unsure who 
          your stakeholders are, take a second to go through the <em>Stakeholder Management </em>  
          tutorial. This is also a living document so feel free to re-evaluate certain aspects 
          as your project progresses.
        </p>

        <p>
          The Project Management Plan is a combination of the following plans: 
        </p>
        <ul>
          <li>
            Scope Management Plan
            <ul>
              <li><b>Scope Baseline</b></li>
            </ul>
          </li>
          <li>
            Requirements Management Plan
          </li>
          <li>
            Change Management Plan
          </li>
          <li>
            Configuration Management Plan
          </li>
          <li>
            Schedule Management Plan
            <ul>
              <li><b>Schedule Baseline</b></li>
            </ul>
          </li>
          <li>
            Cost Management Plan
            <ul>
              <li><b>Cost Performance Baseline</b></li>
            </ul>
          </li>
          <li>
            Quality Management Plan
          </li>
          <li>
            Process Improvement Plan
          </li>
          <li>
            Human Resource Plan
          </li>
          <li>
            Communications Management Plan
          </li>
          <li>
            Risk Management Plan
          </li>
          <li>
            Procurement Management Plan
          </li>
        </ul>

        <p>
          This can be a very daunting list to start to tackle. The best thing to do is remember that every project is different and therefore is customizable. Your project might not need all of these different resources or plans so when talking to the stakeholders identify which of these plans is appropriate for your project. It is also okay to add to the plan over time. It might not make sense to create the plan in one sitting. Since this is a living document, plans can be changed, added and deleted throughout the life of the project. 
        </p>

        <p>
          The bolded baselines are the recommended “required” aspects to start your project management plan. Ideally these baselines were agreed upon during the charter/creation of the project with the sponsor/client. These are going to be key to starting the foundation of your project. 
        </p>

        <img className='inTextTutorialImg' src={PMPImageTwo} alt="Project Management Process"/>

        <h3>Tips Before Starting</h3>
        <ol>
          <li>
            Make sure you have identified all of your project stakeholders and which ones will need to approve the project management plan
          </li>
          <li>
            Identify which of the twelve plans above are needed for the project management plan
          </li>
          <li>
            Gather all the project charter information. This is the information about final deliverables, scope, budget/costs, and the timeline/schedule for the project. 
          </li>
        </ol>

        <p>
        Once you have the items above, start filling out the Project Management Plan Template. Note, you may use whichever template, format or software that works best for your project and organization. There is a template provided for those who would like to use it. 
        </p>

        <p>insert sources</p>
      </div>
      
    </>
  )
}

export default Pmp