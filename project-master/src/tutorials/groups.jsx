import { useState } from 'react'
import groupImg from '../assets/inTextTutorialPictures/groupsTutPage.jpeg';

function Groups() {
  const [count, setCount] = useState(0)

  return (
        <div className='tutorialContentPage'>
            <h1>Five Groups of Project Mangement Processes</h1>
            <h2>What is Project Management?</h2>
            <p>The application of knowledge, skills, tools, and techniques to project activities to meet project environments.</p>

            <h2>What is a Project?</h2>
            <ul>
                <li>A time-scoped/time-boxed activity</li>
                <li>Has a beginning, middle, and an end</li>
                <li>Creates a unique product, service, or result</li>
                <li>A "progressive elaboration"</li>
            </ul>

            <p>In project management, projects are often broken down into phases, stages, or groups to facilitate better planning, execution, and control. One widely recognized framework is the Project Management Institute's (PMI) Project Management Body of Knowledge (PMBOK).</p>

            <h2>What are the five process groups?</h2>
            <ol>
                <li>Initiating</li>
                <li>Planning</li>
                <li>Executing</li>
                <li>Monitoring & Controlling</li>
                <li>Closing</li>
            </ol>

            <img className='inTextTutorialImg' src={groupImg} alt="Five Process Groups"/>

            <h2>Initiating Process Group:</h2>
            <p><strong>Purpose:</strong> This group involves defining a new project or a new phase of an existing project. It is about getting the project started.</p>
            <p><strong>Key Activities:</strong></p>
            <ul>
                <li>Developing a project charter: Document that formally authorizes the project.</li>
                <li>Identifying stakeholders: Individuals or groups who may affect or be affected by the project.</li>
            </ul>

            <h2>Planning Process Group:</h2>
            <p><strong>Purpose:</strong> In this group, the project scope is defined, objectives are set, and the course of action to attain those objectives is planned.</p>
            <p><strong>Key Activities:</strong></p>
            <ul>
                <li>Creating a project management plan: Describes how the project will be executed, monitored, and controlled.</li>
                <li>Defining scope, time, cost, quality, communication, risk, and procurement plans.</li>
                <li>Developing a schedule and budget.</li>
            </ul>

            <h2>Executing Process Group:</h2>
            <p><strong>Purpose:</strong> This group involves putting the project plan into motion to deliver the project.</p>
            <p><strong>Key Activities:</strong></p>
            <ul>
                <li>Acquiring and developing the project team.</li>
                <li>Directing and managing project execution.</li>
                <li>Performing quality assurance.</li>
                <li>Distributing information, managing stakeholders, and conducting procurement activities.</li>
            </ul>

            <h2>Monitoring and Controlling Process Group:</h2>
            <p><strong>Purpose:</strong> This group involves regularly measuring and monitoring project performance to ensure that project objectives are met.</p>
            <p><strong>Key Activities:</strong></p>
            <ul>
                <li>Monitoring and controlling project work.</li>
                <li>Performing integrated change control.</li>
                <li>Verifying and controlling scope, time, cost, quality, risks, and procurements.</li>
            </ul>

            <h2>Closing Process Group:</h2>
            <p><strong>Purpose:</strong> This group involves finalizing all project activities to formally close the project or phase.</p>
            <p><strong>Key Activities:</strong></p>
            <ul>
                <li>Closing out contracts and procurement.</li>
                <li>Obtaining final acceptance for the project.</li>
                <li>Handing over deliverables to the customer.</li>
                <li>Conducting post-project or phase reviews.</li>
            </ul>

            <p>These process groups are not executed linearly; they often overlap and interact throughout the project life cycle. Additionally, PMBOK emphasizes the importance of iterative processes and continuous improvement.</p>
        </div>
  )
}

export default Groups