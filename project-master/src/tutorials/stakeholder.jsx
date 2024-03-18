import { useState } from 'react'
import ImageOne from '../assets/inTextTutorialPictures/stakeImg1.avif'
import ImageTwo from '../assets/inTextTutorialPictures/stakeImg2.png'
import ImageThree from '../assets/inTextTutorialPictures/stakeImg3.png'
import ImageFour from '../assets/inTextTutorialPictures/stakeImg4.webp'


function Stakeholder() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='tutorialContentPage'>
        <h1>Stakeholders Management</h1>
        <p>Identifying stakeholders is a crucial step in the project management process, and it falls within the Initiating Process Group.</p>

        <img className='inTextTutorialImg' src={ImageOne} alt="Stakeholder Management Process"/>

        <h2>1. Definition of Stakeholders:</h2>
        <p>Stakeholders can include individuals, groups, organizations, or even systems that have an interest in or are influenced by the outcome of the project. Stakeholders can be internal or external to the organization, and they may have varying degrees of influence and interest in the project.</p>

        <h2>2. Stakeholder Identification Techniques:</h2>
        <ul>
            <li>Brainstorming: Engaging project team members and experts to generate a list of potential stakeholders.</li>
            <li>Document Reviews: Examining existing documents, such as organizational charts, project charters, and stakeholder registers from previous projects.</li>
            <li>Surveys and Questionnaires: Collecting information from potential stakeholders to identify their interests and expectations.</li>
            <li>Stakeholder Analysis: Evaluating the potential impact, influence, and interest of each stakeholder on the project.</li>
        </ul>

        <img className='inTextTutorialImg' src={ImageTwo} alt="Identify Stakeholders Process"/>

        <h3>Power/Interest Grid:</h3>
        <p>High Power, High Interest: Key players who must be fully engaged and satisfied. Involve them closely in project activities and decisions.
        High Power, Low Interest: Keep these stakeholders satisfied, but don't overwhelm them with too much detail. Keep them informed at a high level.
        Low Power, High Interest: Keep these stakeholders adequately informed. They are interested, but their influence is limited.
        Low Power, Low Interest: Monitor these stakeholders, but don't spend too much time or resources on them unless their situation changes.
        </p>

        <img className='inTextTutorialImg' src={ImageThree} alt="Power/Interest Grid"/>

        <h2>3. Stakeholder Categories:</h2>
        <ul>
            <li>Internal Stakeholders: Individuals or groups within the organization, such as employees, managers, or executives.</li>
            <li>External Stakeholders: Entities outside the organization, including customers, suppliers, regulators, and the community.</li>
            <li>Project-Specific Stakeholders: Those directly involved in the project, such as project team members, sponsors, and end users.</li>
            <li>Enterprise Environmental Factors: Factors that can influence stakeholder identification, such as organizational culture, structure, and existing relationships.</li>
        </ul>

        <h2>4. Stakeholder Register:</h2>
        <p>The output of the Identify Stakeholders process is a Stakeholder Register. The Stakeholder Register contains information about each stakeholder, including their name, role, expectations, interests, and level of influence. It serves as a valuable reference throughout the project, aiding in communication, planning, and managing stakeholder expectations.</p>

        <img className='inTextTutorialImg' src={ImageFour} alt="Stakeholder Register"/>

        <h2>5. Continuous Update:</h2>
        <p>Stakeholder identification is not a one-time activity. The project team should continuously review and update the Stakeholder Register as the project progresses. New stakeholders may emerge, and existing stakeholders' interests and influence levels may change.</p>

        <h2>6. Stakeholder Engagement:</h2>
        <p>Once stakeholders are identified, the project team should engage with them to gather input, manage expectations, and address concerns. Effective communication and collaboration with stakeholders contribute to project success.</p>

        <p>Identifying stakeholders lays the foundation for effective communication, risk management, and stakeholder engagement throughout the project life cycle.</p>
      </div>
      
    </>
  )
}

export default Stakeholder