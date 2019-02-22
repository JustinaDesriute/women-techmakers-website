import React, { Component } from 'react';
import firebase from '../FirebaseConfig';
import AudioPlayer from 'react-h5-audio-player';

class Podcasts extends Component {

  constructor() {
    super();
    this.state = {
      podcasttitle: "",
      podcastcontent: "",
    };
  }

    getPodcasts = e => {
      const db = firebase.firestore();

      db.collection('podcasts').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          let fetcheddata = Object.values(doc.data());
          let content = fetcheddata[0];
          let title = fetcheddata[1];
          this.setState({
            podcastcontent: content,
            podcasttitle: title,
          });
        })
      });
    }

    render() {

        return (
            <div className="main-content">
              <p>navigated to: PODCASTS</p>
              <button onClick={this.getPodcasts}>
                fetch podcasts from firebase
              </button>
              <p>podcast title: {this.state.podcasttitle}</p>
              <AudioPlayer
                autoPlay
                src={this.state.podcastcontent}
                onPlay={e => console.log("onPlay")}
                // other props here
              />
            </div>
        )
      }
    }

export default Podcasts