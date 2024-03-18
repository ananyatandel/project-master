import { useState } from 'react'

function GoogleDocsViewer({URL, setURL, imageLink, title}){
    const [linkChanged, setLinkChanged] = useState(false)
    const [originalLink, changeOriginalLink] = useState (URL)
    const [displayURLChange, setDisplayURLChange] = useState(false)

    function changeLink(){
        setDisplayURLChange(true)
        //console.log("in Change link")
    }

    function submitLink(e){
        e.preventDefault(); //Prevents the page from reloading
        console.log("in the submit link function");

        const form = e.target;
        const formData = new FormData(form); //creates a new object of the submission

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        setURL(formJson.newLink);
        setLinkChanged(true);
        console.log(originalLink);
        setDisplayURLChange(false);
    }

    function revertLink() {
        setURL(originalLink)
        setDisplayURLChange(false)
        setLinkChanged(false)
    }

    //RETURN
    if(displayURLChange == false){
        if(linkChanged == false){
            return (
                <div className='documentBox'>
                  <a href={URL} target="_blank" rel="noopener noreferrer"><img src={imageLink} alt="photo" className='docPhoto'/></a>
                  <h2>{title}</h2>
                  <button className='tutorialButton' onClick={changeLink}>Change Link</button>
                </div>
            )
        }else{
            return (
                <div className='documentBox'>
                  <a href={URL} target="_blank" rel="noopener noreferrer"><img src={imageLink} alt="photo" className='docPhoto'/></a>
                  <h2>{title}</h2>
                  <button className='tutorialButton' onClick={changeLink}>Change Link</button>
                  <button className='tutorialButton' onClick={revertLink}>Reset to Template</button>
                </div>
            )
        }
    }else{

        if(linkChanged == false){
            return (
                <div className='documentBox'>
                  <a href={URL} target="_blank" rel="noopener noreferrer"><img src={imageLink} alt="photo" className='docPhoto'/></a>
                  <h2>{title}</h2>
                  <button className='tutorialButton' onClick={changeLink}>Change Link</button>
                  <form method="post" onSubmit={submitLink}>
                    <input type="URL" name="newLink" />
                    <button className='tutorialButton' type="submit">Submit</button>
                  </form>
                  
                </div>
            )
        }else{
            return (
                <div className='documentBox'>
                  <a href={URL} target="_blank" rel="noopener noreferrer"><img src={imageLink} alt="photo" className='docPhoto'/></a>
                  <h2>{title}</h2>
                  <button className='tutorialButton' onClick={changeLink}>Change Link</button>
                  <button className='tutorialButton' onClick={revertLink}>Reset to Template</button>
                  <form method="post" onSubmit={submitLink}>
                    <input type="URL" name="newLink" />
                    <button className='tutorialButton' type="submit">Submit</button>
                  </form>
                </div>
            )
        }


        
    }
  
}

export default GoogleDocsViewer