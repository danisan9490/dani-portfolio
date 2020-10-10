import React from 'react';
import './Contact.css';
import useClipboard from "react-use-clipboard";

function Contact() {

  const [isCopied, setCopied] = useClipboard("danisan9490@gmail.com", {
    successDuration: 8000
  });

  return (
    <div className="contact">
      <div className="contactHeader">
        <h1>Contact </h1>
        <h6>Get in touch!</h6>
      </div>


      <div className="contactDetails">

        <div className="topDetails">
          <div className="containerItem emailContainer">
            <div className="boxEmail" >
              <i className=" far fa-envelope" onClick={setCopied}></i>
              {isCopied ? (<div>
                <i className="far fa-check-circle"></i>
                <p className="copied" >Copied to clipboard</p>
              </div>

              ) : (
                  <div>
                    <i className="far fa-copy"></i>
                  </div>
                )}

            </div>
            <p className="pCopy" onClick={setCopied}>
              danisan9490@gmail.com
              </p>


          </div>
          <div className="containerItem linkedInContainer">
            <a href="https://www.linkedin.com/in/daniel-san-eusebio-570871167/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
              <p className="pCopy">LinkedIn</p>
            </a>

          </div>

        </div>

        <div className="buttonDetails">
          <div className="containerItem gitHubContainer">
            <a href="https://github.com/danisan9490"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className=" fab fa-github"></i>
              <p className="pCopy" >GitHub</p>
            </a>


          </div>
          <div className="containerItem locationContainer">
            <div>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <p className="pPocation" >London, UK</p>
          </div>

        </div>


      </div>


    </div>
  );
}

export default Contact;
