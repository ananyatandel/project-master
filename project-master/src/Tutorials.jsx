import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './main.css'

function Tutorials() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <p>This is the Tutorials page</p>
        </div>
        <div id="tutorials">
    {/* <!-- Image container --> */}
    <div class="image-container">
      {/* <!-- First image --> */}
      <div>
        <a href="link_to_first_page.html">
          <img src="image1.jpg" alt="Image 1"/>
          <div class="label">Project Management Plan</div>
        </a>
      </div>
      {/* <!-- Second image --> */}
      <div>
        <a href="link_to_second_page.html">
          <img src="image2.jpg" alt="Image 2"/>
          <div class="label">5 Groups</div>
        </a>
      </div>
      {/* <!-- Third image --> */}
      <div>
        <a href="link_to_third_page.html">
          <img src="image3.jpg" alt="Image 3"/>
          <div class="label">Identify Stakeholders</div>
        </a>
      </div>
    </div>
  </div>
    </>
  )
}

export default Tutorials