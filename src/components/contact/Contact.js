import { IconButton } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="container">
      <div className="content">
        <div className="left-side">
          <div>
            <div className="text-two">
              <IconButton>
                <a
                  href="https://github.com/mawusikpodo/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: `#5029bc`, textDecoration: `none` }}
                >
                  <GitHubIcon />
                </a>
              </IconButton>
              github.com/mawusikpodo/
            </div>
            <div className="text-two">
              <IconButton>
                <a
                  href="https://linkedin.com/in/mawusikpodo/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: `#5029bc`, textDecoration: `none` }}
                >
                  <LinkedInIcon />
                </a>
              </IconButton>
              linkedin.com/in/mawusikpodo/
            </div>
            <div className="text-two">
              <IconButton>
                <a
                  href="tel:+233247172637"
                  style={{ color: `#5029bc`, textDecoration: `none` }}
                >
                  <CallIcon />
                </a>
              </IconButton>
              +233 247172637
            </div>
            <div className="text-two">
              <IconButton>
                <a
                  href="mailto:mawusikpodo@yahoo.com"
                  style={{ color: `#5029bc`, textDecoration: `none` }}
                >
                  <EmailIcon />
                </a>
              </IconButton>
              mawusikpodo@yahoo.com
            </div>
          </div>
          <div className="topic"></div>
          <div className="topic"></div>
        </div>
        <div className="right-side">
          <div className="topic-text">Send me a message</div>
          <p>
            If you have any work from me or any types of quries, you can send me
            message from here. Thank you!
          </p>
          <form
            action="mailto:mawusikpodo@yahoo.com"
            method="POST"
            encType="multipart/form-data"
            name="EmailForm"
          >
            <div className="input-box">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="input-box message-box">
              <input type="text" placeholder="Enter your message" />
            </div>
            <div className="button">
              <input type="submit" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
