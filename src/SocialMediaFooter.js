import React, { Component } from 'react'

class SocialMediaFooter extends Component {

  render() {

    return (
        <div className="social-media-footer">
          <ul className="social-media-list">
              <li className="social-media-link">linkedin</li>
              <li className="social-media-link">fb</li>
              <li className="social-media-link">twitter</li>
              <li className="social-media-link">meetup</li>
              <li className="social-media-link">email</li>
          </ul>
        </div>
    )
  }
}

export default SocialMediaFooter