import React, { Component } from 'react';
import fblogo from './fb-logo.png';
import twitterlogo from './twitter-logo.png';
import meetuplogo from './meetup-logo.png';
import emailicon from './email.png';

class SocialMediaFooter extends Component {

  render() {

    return (
        <div className="social-media-footer">
          <ul className="social-media-list">
              <li className="social-media-link">
                <a href="https://www.facebook.com/womentechmakersfrankfurt/" target="_blank">
                  <img src={fblogo} className="social-media-icon" alt="facebook logo">
                </img>
                </a>
              </li>
              <li className="social-media-link">
                <a href="https://twitter.com/WTM_Frankfurt" target="_blank">
                  <img src={twitterlogo} className="social-media-icon" alt="twitter logo"></img>
                </a>
              </li>
              <li className="social-media-link">
                <a href="https://www.meetup.com/Women-Techmakers-Frankfurt_Rhein-Main/" target="_blank">
                  <img src={meetuplogo} className="social-media-icon" alt="meetup logo"></img>
                </a>
              </li>
              <li className="social-media-link">
                <a href="mailto:wtm.frankfurt@gmail.com">
                  <img src={emailicon} className="social-media-icon" alt="email icon"></img>
                </a>
              </li>
          </ul>
        </div>
    )
  }
}

export default SocialMediaFooter