import React, { Component } from "react";
import fblogo from "../assets/fb-logo.png";
import twitterlogo from "../assets/twitter-logo.png";
import meetuplogo from "../assets/meetup-logo.png";
import emailicon from "../assets/email.png";

class SocialMediaFooter extends Component {
  render() {
    return (
      <div className="social-media-footer">
        <ul className="social-media-list">
          <li className="social-media-link">
            <a
              href="https://www.facebook.com/womentechmakersfrankfurt/"
              target="_blank"
            >
              <img
                src={fblogo}
                className="social-media-icon"
                alt="facebook logo"
              />
            </a>
          </li>
          <li className="social-media-link">
            <a href="https://twitter.com/WTM_Frankfurt" target="_blank">
              <img
                src={twitterlogo}
                className="social-media-icon"
                alt="twitter logo"
              />
            </a>
          </li>
          <li className="social-media-link">
            <a
              href="https://www.meetup.com/Women-Techmakers-Frankfurt_Rhein-Main/"
              target="_blank"
            >
              <img
                src={meetuplogo}
                className="social-media-icon"
                alt="meetup logo"
              />
            </a>
          </li>
          <li className="social-media-link">
            <a href="mailto:wtm.frankfurt@gmail.com">
              <img
                src={emailicon}
                className="social-media-icon"
                alt="email icon"
              />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SocialMediaFooter;
