export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React Router - can turn into nav bar</h1>
          <nav>
            <ul>
              <li>
                <a href={`./Documents`}>Documents Page</a>
              </li>
              <li>
                <a href={`./Tutorials`}>Tutorials Page</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }